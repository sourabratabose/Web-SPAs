import { Cross1Icon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { Toast } from "radix-ui";


export default function NotificationToast({
  notificationOpen,
  setNotificationState,
  notificationMessage,
}: {
  notificationOpen: boolean;
  setNotificationState: (value: boolean) => void;
  notificationMessage: {
    success: boolean;
    message: string;
  };
}) {

  return (
    <Toast.Root
      open={notificationOpen}
      onOpenChange={setNotificationState}
      duration={3000}
      className={
        "p-3 rounded-md backdrop-blur-xl border-2 border-solid shadow-lg" +
        " " +
        (notificationMessage.success
          ? "border-green-500 shadow-green-700/60"
          : "border-red-500 shadow-red-700/60")
      }
    >
      <Flex
        direction={"row"}
        align={"center"}
        justify={"between"}
        width={"100%"}
        gap={"3"}
        mb={"3"}
      >
        <Toast.Title asChild={true}>
          <Heading
            size={"2"}
            weight={"medium"}
            as={"h3"}
            className={
              "line-clamp-1 overflow-hidden text-ellipsis text-nowrap" +
              " " +
              (notificationMessage.success
                ? "text-green-500"
                : "text-red-500")
            }
          >
            {notificationMessage.success
              ? "Message successfully sent"
              : "Can't send message"}
          </Heading>
        </Toast.Title>
        <Toast.Close asChild={true}>
          <Button type="button" size={"1"} variant={"surface"}>
            <Cross1Icon />
          </Button>
        </Toast.Close>
      </Flex>
      <Toast.Description asChild>
        <Text
          as={"p"}
          size={"2"}
          align={"left"}
          className="line-clamp-2 overflow-hidden text-ellipsis"
        >
          {notificationMessage.message}
        </Text>
      </Toast.Description>
    </Toast.Root>
  );
}
