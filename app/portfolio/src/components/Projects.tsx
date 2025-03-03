import {
  Section,
  Flex,
  Heading,
  Blockquote,
  Badge,
  Text,
  Box,
  Link,
  Button,
} from "@radix-ui/themes";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Projects() {
  const { projects: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true} maxWidth={"100%"}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Projects
        </Heading>
        {data.map((val, idx) => (
          <Blockquote size={"3"} wrap={"pretty"} key={idx}>
            <Flex direction={"column"} mb={"1"} gap={"3"}>
              <Box overflow={"hidden"} maxWidth={"100%"} maxHeight={"160px"}>
                <img alt={val.imgFallback} src={val.img} />
              </Box>
              <Heading
                as={"h1"}
                size={"8"}
                weight={"bold"}
                align={"left"}
                color={"iris"}
              >
                {val.title}
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
              <Flex align={"center"} justify={"start"} gap={"3"} wrap={"wrap"}>
                {val.technologies.map((technology, innerIdx) => (
                  <Badge size={"3"} color={"bronze"} key={innerIdx}>
                    {technology}
                  </Badge>
                ))}
              </Flex>
              <Flex
                direction={"column"}
                align={"start"}
                justify={"center"}
                width={"100%"}
                gap={"3"}
              >
                <Text as={"p"} weight={"light"} size={"3"}>
                  {val.description}
                </Text>
                <Text as={"p"} weight={"light"} size={"3"}>
                  Some of the features are :-
                </Text>
                {val.pointsToBeNoted.map((point, innerIdx) => (
                  <Flex
                    key={innerIdx}
                    gap={"1"}
                    align={"start"}
                    justify={"center"}
                  >
                    <TriangleRightIcon className={"mt-1.5"} />
                    <Text weight={"light"} size={"3"} as={"p"}>
                      {point}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Flex
                direction={"row"}
                gap={"3"}
                wrap={"wrap"}
                align={"center"}
                justify={"start"}
              >
                {val.urls.map((url, innerIdx) => (
                  <Link href={url.href} underline={"hover"} key={innerIdx} asChild={true}>
                    <Button variant={"surface"}>{url.label}</Button>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Blockquote>
        ))}
      </Flex>
    </Section>
  );
}
