import unifiedAxiosInstance from "./AxiosInstance";
import message_schema from "../schema/MessageSchema";

export default async function send_message(form_data: FormData): Promise<boolean> {
  const {success, data } = message_schema.safeParse(
    Object.fromEntries(form_data)
  );

  if (success) {
    const msg_sent = await unifiedAxiosInstance.post("/messages", {
      data: JSON.stringify(data),
    });
    if (msg_sent.status < 300) return true;
    else return true;
  } else return false;
}