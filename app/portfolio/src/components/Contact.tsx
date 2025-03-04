import {
  Cross1Icon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Dialog,
  Flex,
  Heading,
  Link,
  Strong,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useContext, useState } from "react";
import { PageData } from "../contexts/PageDataContext";
import messageSend, { messageSchema } from "../function/MessageSend";


export default function Contact() {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<"none" | "success" | "fail">(
    "none"
  );

  const { contactEmail: data } = useContext(PageData);

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSendingMessage(true);
    try {
      const formObject = Object.fromEntries(new FormData(e.currentTarget));
      const data = messageSchema.parse(formObject);

      const success: boolean = await messageSend(data);
      if (success) setSendStatus("success");
      else setSendStatus("fail");
      setTimeout(() => setSendStatus("none"), 5000)
    } catch (e) {
      console.error("Error while parsing message : ", e)
    } finally {
      setSendingMessage(false);
    }
  };
  return (
    <Flex
      direction={"column"}
      gap={"5"}
      my={"5"}
      align={{ initial: "center", md: "start" }}
      justify={"center"}
      width={"100%"}
    >
      <Heading
        as={"h1"}
        size={"8"}
        weight={"bold"}
        align={{ initial: "center", md: "left" }}
      >
        Contacts
      </Heading>
      <Text weight={"light"} size={"3"} align={"left"}>
        Want to work together ? You can email me at <Strong>{data}</Strong>
      </Text>
      <Flex align={"center"} justify={"between"} gap={"5"} width={"100%"}>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Message Me</Button>
          </Dialog.Trigger>

          <Dialog.Content>
            <Dialog.Title
              as={"h3"}
              size={"5"}
              color={"gray"}
              weight={"regular"}
              align={"left"}
            >
              <Flex direction={"row"} justify={"between"} align={"center"}>
                Your Message
                <Dialog.Close>
                  <Cross1Icon color={"gray"} />
                </Dialog.Close>
              </Flex>
            </Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Send me a message and I will get back to you within 2 - 3 working
              days.
            </Dialog.Description>
            <form onSubmit={submitHandler}>
              <Flex direction={"column"} gap={"3"}>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Your Name
                  </Text>
                  <TextField.Root
                    placeholder="Enter your full name"
                    name="name"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Contact E-Mail
                  </Text>
                  <TextField.Root placeholder="Enter your email" name="email" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Company Name{" "}
                    <Text as={"span"} color={"gray"} weight={"regular"}>
                      ( Optional )
                    </Text>
                  </Text>
                  <TextField.Root
                    placeholder="Enter your company name"
                    name="companyName"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Your Message
                  </Text>
                  <TextArea placeholder="Your Message..." name="message" />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                {sendStatus == "none" ? (
                  <Button
                    type="submit"
                    loading={sendingMessage}
                    disabled={sendingMessage}
                    size={"2"}
                  >
                    Subscribe <PaperPlaneIcon />
                  </Button>
                ) : sendStatus == "success" ? (
                  <Badge color={"grass"}>Sign up successful</Badge>
                ) : (
                  <Badge color={"ruby"}>Failed to signup</Badge>
                )}
              </Flex>
            </form>
          </Dialog.Content>
        </Dialog.Root>
        <Link href={""} underline={"hover"} asChild={true}>
          <Button variant={"surface"}>
            E - Mail Me <EnvelopeClosedIcon />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
