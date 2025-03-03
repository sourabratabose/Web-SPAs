import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Badge, Button, Flex, TextField } from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useState } from "react";

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
    const data = new FormData(e.currentTarget);
    setSigningUp(false);
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
        <TextField.Root placeholder="Your E - Mail ID" className="w-full">
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
        {signUpStatus == "none" ? (
          <Button type="submit" loading={signingUp} disabled={signingUp}>
            Subscribe <PaperPlaneIcon />
          </Button>
        ) : signUpStatus == "success" ? (
          <Badge color={"grass"}>Sign up successful</Badge>
        ) : (
          <Badge color={"ruby"}>Failed to signup</Badge>
        )}
      </form>
    </Flex>
  );
}
