import {
  PersonIcon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import {
  Flex,
  TextField,
  TextArea,
  Button,
  Link,
  Text,
  Badge,
} from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useState } from "react";

export default function Message() {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<"none" | "success" | "fail">(
    "none"
  );

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSendingMessage(true);
    const data: FormData = new FormData(e.currentTarget);
    setSendingMessage(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <Flex direction={"column"} gap={"3"} my={"3"}>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Your Name
          </Text>
          <TextField.Root placeholder="Enter your full name">
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Contact E-Mail
          </Text>
          <TextField.Root placeholder="Enter your email">
            <TextField.Slot>
              <EnvelopeClosedIcon />
            </TextField.Slot>
          </TextField.Root>
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Company Name{" "}
            <Text as={"span"} color={"gray"} weight={"regular"}>
              ( Optional )
            </Text>
          </Text>
          <TextField.Root placeholder="Enter your company name" />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Your Message
          </Text>
          <TextArea placeholder="Your Message..." />
        </label>
      </Flex>
      <Flex
        direction={"row"}
        justify={"between"}
        align={"center"}
        width={"100%"}
      >
        <Link href="http://google.com" underline={"hover"} asChild={true}>
          <Button type="button" variant={"surface"} size={"2"}>
            Email Me
            <ArrowTopRightIcon />
          </Button>
        </Link>
        {sendStatus == "none" ? (
          <Button type="submit" loading={sendingMessage} disabled={sendingMessage} size={"2"}>
            Subscribe <PaperPlaneIcon />
          </Button>
        ) : sendStatus == "success" ? (
          <Badge color={"grass"}>Sign up successful</Badge>
        ) : (
          <Badge color={"ruby"}>Failed to signup</Badge>
        )}
      </Flex>
    </form>
  );
}
