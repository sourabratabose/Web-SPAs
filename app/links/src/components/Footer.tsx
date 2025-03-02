import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button, Flex, Separator, Text } from "@radix-ui/themes";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Separator
        size={"4"}
        orientation={"horizontal"}
        mt={"4"}
        style={{
          width: "calc(100% - 32px)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Flex
        asChild={true}
        justify={"between"}
        align={"center"}
        px={"4"}
        py={"3"}
        width={"100%"}
      >
        <footer>
          <Text
            size={"2"}
            weight={"light"}
            as={"p"}
            color={"gray"}
            style={{
              textWrap: "balance",
              fontStyle: "italic",
            }}
          >
            Made by Sourabrata Bose | {currentYear}
          </Text>
          <Button
            size={"1"}
            variant={"surface"}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            To top <ArrowUpIcon />
          </Button>
        </footer>
      </Flex>
    </>
  );
}
