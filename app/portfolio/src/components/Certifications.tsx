import {
  Section,
  Flex,
  Heading,
  Blockquote,
  Button,
  Avatar,
  Link,
} from "@radix-ui/themes";
import { Link2Icon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Certifications() {
  const { certification: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Certifications
        </Heading>
        {data.map((val, idx) => (
          <Blockquote size={"3"} wrap={"pretty"} key={idx}>
            <Flex direction={{ initial: "column", sm: "row" }} mb={"1"} gap={"3"}>
              <Avatar src={val.img} fallback={val.imgFallback} size={"5"} />
              <Flex
                direction={"column"}
                align={"start"}
                justify={"center"}
                gap={"3"}
              >
                <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"} color={"iris"}>
                  {val.subject}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.date} by {val.certifiedBy}
                </Heading>
                <Link href={val.url} underline={"hover"} asChild={true}>
                  <Button variant={"surface"}>
                    <Link2Icon />
                    Certificate link
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Blockquote>
        ))}
      </Flex>
    </Section>
  );
}
