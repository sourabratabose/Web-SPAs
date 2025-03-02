import {
  FileTextIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  SewingPinFilledIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";

export default function Hero() {
  return (
    <Card>
      <Flex
        align={{ initial: "center", md: "start" }}
        justify={"center"}
        direction={"column"}
        gap={"5"}
        m={"1"}
      >
        <Avatar size={"9"} fallback={"Sourabrata Bose"} />
        <Heading
          as={"h1"}
          size={"8"}
          weight={"bold"}
          align={{ initial: "center", md: "left" }}
        >
          It's me,{" "}
          <Text as={"span"} color={"iris"} wrap={"nowrap"}>
            Sourabrata Bose
          </Text>
        </Heading>
        <Heading
          as={"h3"}
          size={"5"}
          color={"gray"}
          weight={"regular"}
          align={{ initial: "center", md: "left" }}
        >
          Fullstack Web 2 & 3 Developer
        </Heading>
        <Heading
          as={"h3"}
          size={"5"}
          color={"gray"}
          weight={"regular"}
          className="flex flex-row gap-1"
          align={"left"}
        >
          <SewingPinFilledIcon className="text-red-700 h-6 w-6 " />
          {"Kolkata, WB, India"}
          <Text className="font-mono">IN</Text>
        </Heading>
        <Text weight={"light"} size={"3"} align={"left"}>
          A passionate fullstack web developer building bleeding edge tech
          projects in Typescript and Rust for people.
        </Text>
        <Flex align={"center"} justify={"between"} gap={"5"} width={"100%"}>
          <Link download={true} href="">
            <Button variant={"solid"}>
              Resume <FileTextIcon />
            </Button>
          </Link>
          <Flex align={"center"} justify={"end"} gap={"3"}>
            <Link href={"http://github.com"}>
              <GitHubLogoIcon className="h-6 w-6 hover:scale-110" />
            </Link>
            <Link href={"http://github.com"}>
              <LinkedInLogoIcon className="h-6 w-6 hover:scale-110" />
            </Link>
            <Link href={"http://github.com"}>
              <InstagramLogoIcon className="h-6 w-6 hover:scale-110" />
            </Link>
            <Link href={"http://github.com"}>
              <TwitterLogoIcon className="h-6 w-6 hover:scale-110" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
