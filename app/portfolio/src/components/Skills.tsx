import { Section, Flex, Heading, Badge } from "@radix-ui/themes";
import SkillData from "../types/SkillData";

export default function Skills() {
  const skillData: SkillData[] = [
    {
      category: "Languages",
      skills: [
        "Javascript",
        "Typescript",
        "C",
        "C++",
        "Rust",
        "Java",
        "Python",
      ],
      color: "blue",
    },
    {
      category: "Database and ORM",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "DrizzleORM",
        "Mongoose",
      ],
      color: "red",
    },
    {
      category: "Frameworks and Runtimes",
      skills: [
        "BunJS",
        "NextJS",
        "ReactJS",
        "ElysiaJS",
        "BetterAuthJS",
        "ReactNative",
        "Anchor",
      ],
      color: "amber",
    },
    {
      category: "DevOps and Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Forage",
        "Grafana + Loki",
      ],
      color: "lime",
    },
  ];
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          My Skills
        </Heading>
        {skillData.map((val: SkillData, idx: number) => {
          return (
            <>
              <Heading
                key={idx}
                align={"left"}
                color={"gray"}
                weight={"regular"}
                size={"5"}
                as={"h3"}
              >
                {val.category}
              </Heading>
              <Flex direction={"row"} wrap={"wrap"} gap={"3"} key={idx}>
                {val.skills.map((skill: string, innerIdx: number) => (
                  <Badge key={innerIdx} color={val.color} size={"3"}>
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </>
          );
        })}
      </Flex>
    </Section>
  );
}
