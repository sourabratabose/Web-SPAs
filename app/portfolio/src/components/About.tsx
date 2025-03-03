import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { PageData } from "../contexts/PageDataContext";

export default function About() {
  const { about: aboutBody } = useContext(PageData);
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
              {idx != aboutBody.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </Fragment>
          ))}
        </Text>
      </Flex>
    </Section>
  );
}
