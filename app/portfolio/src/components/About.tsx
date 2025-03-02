import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import { Fragment } from "react/jsx-runtime";

export default function About() {
  const aboutBody: string[] = [
    "I'm a 22-year-old experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.",
    "Throughout my career, I've been deeply involved in the startup ecosystem. I've worked with various startups, embracing the fast-paced, innovative nature of these environments. This journey led me to found my own startup, where I gained firsthand experience in every aspect of product development and business operations.",
    "During my high school years, I excelled in software development, earning the prestigious title of DUX (top student) in this field. This early achievement laid the foundation for my passion and expertise in programming.",
  ];
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          About Me
        </Heading>
        <Text weight={"light"} size={"3"} align={"left"} as={"p"}>
          {aboutBody.map((val, idx: number) => (
            <Fragment key={idx}>
              {val}
              {
                (idx != aboutBody.length - 1) && (<>
                  <br />
                  <br />
                </>)
              }

            </Fragment>
          ))}
        </Text>
      </Flex>
    </Section>
  );
}
