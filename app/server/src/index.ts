// Import
import { Elysia } from "elysia";
import MessageRequest, { messageRequestValidator } from "./classes/MessageRequest";

// Instances
const app = new Elysia();

//Configuration
app.all("/*", ({ error }) => error(501, "Not Implemented"));

app.group("/api", (app) => {
  app.post("/messageRequest", ({ body, set, headers, error }) => {
    if (headers["Content-Type"] != "application/json" || typeof body != "string") return error(400, "Bad Request")
    try {
      const { success, data, error } = messageRequestValidator.safeParse(JSON.parse(body));
      let newMessage = null;
      if (success) newMessage = new MessageRequest(data.name, data.companyName, data.email, data.message);
      else throw new Error(error.message);
      
    } catch (e) {
      console.log(e)
    }
  });
  app.post("/newsletterSubscribe", ({ body, set }) => { });
  app.post("/newsletterUnsubscribe", ({ body, set }) => {});
  return app;
})

// Starting server
app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
