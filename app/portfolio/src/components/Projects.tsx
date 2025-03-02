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
import ProjectData from "../types/ProjectData";
import { TriangleRightIcon } from "@radix-ui/react-icons";

export default function Projects() {
  const data: ProjectData[] = [
    {
      img: "",
      imgFallback: "Socket and SSE based Customer Support Portal",
      title: "Customer Support Portal",
      description:
        "Unified portal for all customers to receive help, support, get their doubts cleared and provide the necessary feedback to the server.",
      timePeriod: "December 12, 2024 - January 20, 2025",
      technologies: [
        "BunJS",
        "ElysiaJS",
        "ReactJS",
        "BetterAuth",
        "Shadcn/UI",
        "uWebSockets",
        "SSE and RESTful API",
        "Mongoose",
        "MongoDB",
        "WebRTC",
      ],
      pointsToBeNoted: [
        "gvabntiuyabnugafv gnuyvnryyurg nsgfruygasnbatvbnisa naudcruitgauiobiartbgvi aunfiuntiunbiiag",
        "asgybgaibgygaybybfrra iarfbauiufaynofanygvb ainyofyaofipmriosynser inysaovyaoiigv gagbyagyuayeyb",
        "asufbvgausiuiaterybybavcyritbbtvacsoio iuasybivctysayatvbcyatryavusbtcrutasuebcte",
      ],
      urls: [{ href: "", label: "Project Repo" }, { href: "", label: "Live URL"}],
    },
  ];
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
