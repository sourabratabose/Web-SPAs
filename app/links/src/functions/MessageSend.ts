import { treaty } from "@elysiajs/eden";
import { z } from "zod";
import App from "../../../server/src/index";

const client = treaty<App>("localhost:4000");

export const messageSchema = z.object({
  name: z.string().min(5).max(100),
  email: z.string().email().min(5).max(100),
  companyName: z.string().min(5).max(100).optional(),
  message: z.string().min(5).max(300),
});

export default async function messageSend(
  msgObj: z.infer<typeof messageSchema>
): Promise<boolean> {
  const response = await client.api.message.post(msgObj);
  if (response.error == undefined) return response.data.delivered;
  else throw new Error("API unavailable right now!");
}
