import { treaty } from "@elysiajs/eden";
import App from "../../../server/src/index.ts";
import { z } from "zod";

const client = treaty<App>("localhost:4000");

export const emailSchema = z.string().email().min(5).max(100);

export default async function newsletter(
  action: "subscribe" | "unsubscribe",
  email: z.infer<typeof emailSchema>
): Promise<boolean> {
  const response = await client.api.newsletter.post({
    action,
    email,
  });
  if (response.error == undefined) return response.data.success;
  else throw new Error("API unavailable right now");
}
