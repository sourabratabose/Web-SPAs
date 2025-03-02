import {
  PersonIcon,
  EnvelopeClosedIcon,
  PaperPlaneIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { Flex, TextField, TextArea, Button, Link } from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import send_message from "../../../functions/MessageValidation";
import NotificationToast from "../NotificationToast/NotificationToast";

export default function SendMessage() {
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const notificationMessage = useRef<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: "No notification present",
  });

  const submitHandler: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data: FormData = new FormData(e.currentTarget);
    setSendingMessage(true);
    const success: boolean = await send_message(data);
    setSendingMessage(false);

    if (success) {
      notificationMessage.current = {
        success: true,
        message: "Your message has been successfully sent!",
      };
    } else {
      notificationMessage.current = {
        success: false,
        message: "Failed to send message."
      };
    }
    setNotificationOpen(true);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Flex
          direction={{ initial: "column", xs: "row" }}
          gap={"3"}
          my={"3"}
          align={"center"}
          justify={{ initial: "start", xs: "between" }}
        >
          <TextField.Root
            placeholder="First Name"
            className="sm:flex-1 w-full"
            type="text"
            name="fname"
            size={"2"}
          >
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root
            placeholder="Last Name"
            className="sm:flex-1 w-full"
            type="text"
            name="lname"
            size={"2"}
          >
            <TextField.Slot>
              <PersonIcon />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <TextField.Root
          placeholder="Your E-Mail ID"
          mb={"3"}
          type="email"
          name="email"
        >
          <TextField.Slot>
            <EnvelopeClosedIcon />
          </TextField.Slot>
        </TextField.Root>
        <TextArea placeholder="Your Message..." mb={"3"} name="msg" />
        <Flex
          direction={"row"}
          justify={"between"}
          align={"center"}
          width={"100%"}
        >
          <Link href="http://google.com">
            <Button type="button" variant={"surface"} size={"2"}>
              Book a Meet
              <ArrowTopRightIcon />
            </Button>
          </Link>
          <Button
            type={"submit"}
            size={"2"}
            loading={sendingMessage}
            disabled={sendingMessage}
          >
            Send Message <PaperPlaneIcon />
          </Button>
        </Flex>
      </form>
      <NotificationToast
        notificationOpen={notificationOpen}
        setNotificationState={setNotificationOpen}
        notificationMessage={notificationMessage.current}
      />
    </>
  );
}
