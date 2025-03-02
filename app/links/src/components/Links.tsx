import { Card, Flex, Heading, Link, Tabs, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";
import PageContextData from "../types/PageContextData";
import { capitalizeFirst } from "../functions/FormatString";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Links() {
  const { linkSections } = useContext<PageContextData>(PageData);
  return (
    <Card className="w-full shadow-iris-a5/60 shadow-lg">
      <Flex direction={"column"} as={"div"} gap={"2"} justify={"between"}>
        <Heading
          size={"6"}
          as={"h1"}
          align={{ initial: "center", xs: "left" }}
          weight={"bold"}
          wrap={"pretty"}
        >
          My Links
        </Heading>
        <Text
          align={{ initial: "center", xs: "left" }}
        >
          Links to some of my profiles on the internet.
        </Text>
        <Tabs.Root defaultValue={linkSections[0].sectionHeading}>
          <Tabs.List size={"2"} wrap={"nowrap"} justify={"start"}>
            {linkSections.map((val, idx) => (
              <Tabs.Trigger value={val.sectionHeading} key={idx}>
                {capitalizeFirst(val.sectionHeading)}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {linkSections.map((val, idx) => {
            return (
              <Tabs.Content value={val.sectionHeading} key={idx} asChild={true}>
                <Flex
                  p={"3"}
                  width={"100%"}
                  gap={"3"}
                  direction={"column"}
                  mt={"3"}
                >
                  {val.links.map((innerVal, innerIdx) => {
                    return (
                      <Link
                        href={innerVal.url}
                        key={innerIdx}
                        underline={"hover"}
                      >
                        <Text
                          weight={"regular"}
                          size={"4"}
                          as={"span"}
                          className="flex items-center justify-start"
                        >
                          {innerVal.text}&nbsp;
                          <ArrowTopRightIcon />
                        </Text>
                      </Link>
                    );
                  })}
                </Flex>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </Flex>
    </Card>
  );
}
