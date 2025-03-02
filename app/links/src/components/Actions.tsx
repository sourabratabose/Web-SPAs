import { Accordion } from "radix-ui";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Heading, Separator, Text } from "@radix-ui/themes";
import SendMessage from "./utils/SendMessage/SendMessage";
import NewsletterSignUp from "./utils/NewsletterSignUp/NewsletterSignUp";

export default function Actions() {
  const [expanded, setExpanded] = useState<string[]>(["2"]);
  return (
    <Accordion.Root
      className={
        "w-full rounded-md hover:shadow-lg shadow-iris-a5/60 shadow-lg"
      }
      defaultValue={["2"]}
      type={"multiple"}
      onValueChange={(accordion_state: string[]) => {
        setExpanded(accordion_state);
      }}
    >
      <Accordion.Item value="1">
        <Accordion.Trigger
          className={
            "flex w-full items-center justify-between px-5 py-3 rounded-t-md outline-none border-2 border-solid hover:bg-iris-a3" +
            " " +
            (expanded.includes("1") ? "border-iris-a5" : "border-transparent")
          }
          asChild={true}
        >
          <Heading
            as={"h1"}
            weight={"medium"}
            size={"4"}
            color={expanded.includes("1") ? "iris" : undefined}
          >
            <Text as={"span"} align={"left"} wrap={"nowrap"}>
              Want to leave a message?
            </Text>
            {expanded.includes("1") ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Heading>
        </Accordion.Trigger>
        <Accordion.Content className={"overflow-hidden p-5"}>
          <Text
            as={"p"}
            size={"3"}
            weight={"regular"}
            align={"left"}
            wrap={"pretty"}
          >
            Fill out the form and I will get back to you, within 2 - 3
            working days. Or schedule a virtual meet!
          </Text>
          <SendMessage />
        </Accordion.Content>
      </Accordion.Item>
      <Separator size={"4"}/>
      <Accordion.Item value="2">
        <Accordion.Trigger
          className={
            "flex w-full items-center justify-between px-5 py-3 outline-none border-2 border-solid hover:bg-iris-a3" +
            " " +
            (expanded.includes("2")
              ? "border-iris-a5"
              : "border-transparent rounded-b-md")
          }
          asChild={true}
        >
          <Heading
            as={"h1"}
            weight={"medium"}
            size={"4"}
            color={expanded.includes("2") ? "iris" : undefined}
          >
            <Text as={"span"} align={"left"} wrap={"nowrap"}>
              Sign up for my Newsletter!
            </Text>
            {expanded.includes("2") ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Heading>
        </Accordion.Trigger>
        <Accordion.Content className={"overflow-hidden p-5"}>
          <Text
            as={"p"}
            weight={"regular"}
            size={"3"}
            align={"left"}
            wrap={"pretty"}
          >
            Interested to know about my latest technological works and
            explorations? Sign up for my newsletter below !
          </Text>
          <NewsletterSignUp />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
