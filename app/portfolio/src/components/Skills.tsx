import { Section, Flex, Heading, Badge } from "@radix-ui/themes";
import SkillData from "../types/SkillData";
import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Skills() {
  const { skills: skillData } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          My Skills
        </Heading>
        {skillData.map((val: SkillData, idx: number) => {
          return (
            <Fragment key={idx}>
              <Heading
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
                  <Badge key={idx * 10 + innerIdx} color={val.color} size={"3"}>
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Fragment>
          );
        })}
      </Flex>
    </Section>
  );
}
