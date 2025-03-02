import {
  Section,
  Flex,
  Heading,
  Blockquote,
  DropdownMenu,
  Button,
  Avatar,
} from "@radix-ui/themes";
import EducationData from "../types/EducationData";

export default function Education() {
  const data: EducationData[] = [
    {
      degree: "Bachelor of Computer Science",
      img: "",
      imgFallback: "IIITK",
      institute: "Indian Institute of Information Technology, Kalyani",
      timePeriod: "December 2021 - July 2025",
      lessons: [
        "Linear Algebra",
        "Differential Calculus",
        "Statistics and Probability",
        "Digital Logic",
        "Computer Organization and Architecture",
        "Microprocessor and Microcontroller",
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Compiler Design",
        "Database System Management and Administration"
      ],
    }, {
      degree: "Diploma in Science",
      img: "",
      imgFallback: "APJS",
      institute: "Apeejay School, Salt Lake",
      timePeriod: "March 2018 - June 2020",
      lessons: ["Physics", "Chemistry", "Biology", "Maths", "English", "Computer Education"]
    }
  ];
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
