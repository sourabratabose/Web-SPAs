import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Flex,
  TextField,
  Text,
  Heading,
} from "@radix-ui/themes";
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
      gap={"3"}
      direction={"column"}
      justify={"center"}
      align={{ initial: "center", md: "start" }}
      width={"100%"}
    >
      <Heading
        as={"h1"}
        size={"8"}
        weight={"bold"}
        align={{ initial: "center", md: "left" }}
      >
        Newsletter
      </Heading>
      <Text
        as={"p"}
        weight={"regular"}
        size={"3"}
        align={"left"}
        wrap={"pretty"}
      >
        Interested to know about my latest technological works and explorations?
        Sign up for my newsletter below !
      </Text>
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
    </Flex>
  );
}
