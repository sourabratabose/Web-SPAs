import {
  Section,
  Flex,
  Heading,
  Blockquote,
  DropdownMenu,
  Button,
  Avatar,
} from "@radix-ui/themes";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Education() {
  const { education: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Education
        </Heading>
        {data.map((val, idx) => (
          <Blockquote size={"3"} wrap={"pretty"} key={idx}>
            <Flex direction={{ initial: "column", sm: "row" }} mb={"1"} gap={"3"}>
              <Avatar src={val.img} fallback={val.imgFallback} size={"5"}/>
              <Flex
                direction={"column"}
                align={"start"}
                justify={"center"}
                gap={"3"}
              >
                <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"} color={"iris"}>
                  {val.degree}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.institute}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.timePeriod}
                </Heading>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="surface">
                      <DropdownMenu.TriggerIcon />
                      Courses Taken
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    {val.lessons.map((lesson, innerIdx) => (
                      <DropdownMenu.Item key={innerIdx}>
                        {lesson}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Flex>
            </Flex>
          </Blockquote>
        ))}
      </Flex>
    </Section>
  );
}
