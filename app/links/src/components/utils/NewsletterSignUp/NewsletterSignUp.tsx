import { EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useRef, useState } from "react";
import newsletter_signup from "../../../functions/NewsletterValidation";
import NotificationToast from "../NotificationToast/NotificationToast";

export default function NewsletterSignUp() {
  const [signingUp, setSigningUp] = useState<boolean>(false);
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
    setSigningUp(true);
    const data = new FormData(e.currentTarget);
    const success: boolean = await newsletter_signup(data);
    setSigningUp(false);
    if (success) {
      notificationMessage.current = {
        success: true,
        message: "Your have successfully signed up!",
      };
    } else {
      notificationMessage.current = {
        success: false,
        message: "Failed to signup.",
      };
    }
    setNotificationOpen(true);
  };
  return (
    <>
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
          <Button type="submit" loading={signingUp} disabled={signingUp}>
            Subscribe <PaperPlaneIcon />
          </Button>
        </form>
      </Flex>
      <NotificationToast
        notificationOpen={notificationOpen}
        setNotificationState={setNotificationOpen}
        notificationMessage={notificationMessage.current}
      />
    </>
  );
}
