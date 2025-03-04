import staticPlugin from "@elysiajs/static";
import { cors } from "@elysiajs/cors";
import { file } from "bun";
import { Elysia, t } from "elysia";
import db from "../db/db";
import { messageRequestsSchema, newsletterUsersSchema } from "../db/schema";
import { eq } from "drizzle-orm";

const app = new Elysia()
  // .use(cors({
  //   origin: true
  // }))
  .use(
    staticPlugin({
      assets: "../../dist/links/assets",
      prefix: "/assets",
    })
  )
  .get("/", file("../../dist/links/index.html"))
  .use(
    staticPlugin({
      assets: "../../dist/portfolio/assets",
      prefix: "/portfolio/assets",
    })
  )
  .get("/portfolio", file("../../dist/portfolio/index.html"))
  .group("/api", (app) =>
    app
      .post(
        "/newsletter",
        async (c) => {
          try {
            if (c.body.action == "subscribe") {
              await db
                .insert(newsletterUsersSchema)
                .values({
                  email: c.body.email,
                  signUpDate: new Date().toDateString(),
                  active: true,
                })
                .returning({
                  email: newsletterUsersSchema.email,
                })
                .onConflictDoNothing({
                  target: newsletterUsersSchema.email,
                });
            } else if (c.body.action == "unsubscribe") {
              await db
                .update(newsletterUsersSchema)
                .set({
                  active: false,
                })
                .where(eq(newsletterUsersSchema.email, c.body.email));
            }
          } catch (e) {
            console.log("Newsletter update error : ", e);
            return {
              success: false,
            };
          }
          return {
            success: true,
          };
        },
        {
          body: t.Object({
            action: t.Readonly(
              t.Union([t.Literal("subscribe"), t.Literal("unsubscribe")])
            ),
            email: t.Readonly(
              t.String({
                format: "email",
                minLength: 5,
                maxLength: 100,
              })
            ),
          }),
          response: t.Object({
            success: t.Boolean(),
          }),
        }
      )
      .post(
        "/message",
        async (c) => {
          try {
            await db.insert(messageRequestsSchema).values({
              name: c.body.name,
              companyName:
                c.body.companyName != undefined ? c.body.companyName : null,
              email: c.body.email,
              message: c.body.message,
            });
          } catch (e) {
            console.error("Message insert error occurred : ", e);
            return {
              delivered: false,
            };
          }
          return {
            delivered: true,
          };
        },
        {
          body: t.Object({
            name: t.Readonly(
              t.String({
                minLength: 5,
                maxLength: 100,
              })
            ),
            email: t.Readonly(
              t.String({
                format: "email",
                minLength: 5,
                maxLength: 100,
              })
            ),
            companyName: t.ReadonlyOptional(
              t.String({
                minLength: 5,
                maxLength: 100,
              })
            ),
            message: t.Readonly(
              t.String({
                minLength: 5,
                maxLength: 300,
              })
            ),
          }),
          response: t.Object({
            delivered: t.Boolean(),
          }),
        }
      )
  )
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

type App = typeof app;
export default App;
