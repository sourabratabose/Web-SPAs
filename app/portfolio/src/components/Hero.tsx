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
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Hero() {
  const { hero: data } = useContext(PageData);
  return (
    <Card className={"shadow-iris-a5/60 shadow-lg"}>
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
          {data.job}
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
          {data.location}
          <Text className="font-mono">{data.countrySymbol}</Text>
        </Heading>
        <Text weight={"light"} size={"3"} align={"left"}>
          {data.description}
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
