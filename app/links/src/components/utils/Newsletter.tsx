import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Badge, Button, Flex, TextField } from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useState } from "react";
import newsletter, { emailSchema } from "../../functions/NewsletterSignUp";

export default function Newsletter() {
  const [signingUp, setSigningUp] = useState<boolean>(false);
  const [signUpStatus, setSignUpStatus] = useState<"none" | "success" | "fail">(
    "none"
  );

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSigningUp(true);
    try {
      const formObject = new FormData(e.currentTarget);
      const data = emailSchema.parse(formObject.get("email"));

      const response: boolean = await newsletter("subscribe", data);
      if (response) setSignUpStatus("success");
      else setSignUpStatus("fail")
      setTimeout(() => setSignUpStatus("none"), 5000)
    } catch (e) { 
      console.log("Error parsing the email : ", e)
    } finally {
      setSigningUp(false);
    }
  };
  return (
    <Flex
      asChild={true}
      gap={"3"}
      width={"100%"}
      direction={"column"}
      align={"end"}
      justify={"center"}
      mt={"3"}
    >
      <form onSubmit={submitHandler}>
        <TextField.Root placeholder="Your E - Mail ID" className="w-full" name="email">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
        {signUpStatus == "none" ? (
          <Button type="submit" loading={signingUp} disabled={signingUp}>
            Subscribe <PaperPlaneIcon />
          </Button>
        ) : signUpStatus == "success" ? (
          <Badge color={"grass"} size={"3"}>Sign up successful</Badge>
        ) : (
          <Badge color={"ruby"} size={"3"}>Failed to signup</Badge>
        )}
      </form>
    </Flex>
  );
}
