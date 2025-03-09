import { Flex, Heading } from "@radix-ui/themes";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <Flex
      asChild={true}
      display={"flex"}
      direction={"row"}
      justify={"between"}
      align={"center"}
      p={"4"}
      gapX={"5"}
      width={"100%"}
      height={"auto"}
      position={"fixed"}
      top={"0"}      
    >
      <header className="-translate-x-1/2 left-1/2 z-20 backdrop-blur-xl bg-iris-a5/30 shadow-md shadow-iris-a5/60 rounded-b-lg">
        <Heading size={"5"}>
          <Heading size={"5"} weight={"light"} asChild={true}>
            <span>SBose </span>
          </Heading>
          | Links
        </Heading>
        <ThemeButton />
      </header>
    </Flex>
  );
}
