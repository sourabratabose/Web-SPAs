import newsletter_schema from "../schema/NewsletterSchema";
import unifiedAxiosInstance from "./AxiosInstance";

export default async function newsletter_signup(form_data: FormData): Promise<boolean> {
  const { success, data } = newsletter_schema.safeParse(
    Object.fromEntries(form_data)
  );
  if (success) {
    const result = await unifiedAxiosInstance.post("/newsletter", {
      data: JSON.stringify({
        action: "signup",
        email: data.email,
      }),
    });
    if (result.status < 300) return true;
    else return false;
  } else return false;
}
