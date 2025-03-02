import {
  Section,
  Flex,
  Heading,
  Blockquote,
  Button,
  Avatar,
  Link,
} from "@radix-ui/themes";
import CodeProfileData from "../types/CodingProfileData";
import { Link2Icon } from "@radix-ui/react-icons";

export default function CodingProfiles() {
  const data: CodeProfileData[] = [
    {
      rank: "1432",
      platform: "Geeks for Geeks",
      url: "",
      peakRank: "1680",
      img: "",
      imgFallback: "GFG"
    }
  ];
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Coding Profiles
        </Heading>
        {data.map((val, idx) => (
          <Blockquote size={"3"} wrap={"pretty"} key={idx}>
            <Flex direction={{initial: "column", sm: "row"}} mb={"1"} gap={"3"}>
              <Avatar src={val.img} fallback={val.imgFallback} size={"5"} />
              <Flex
                direction={"column"}
                align={"start"}
                justify={"center"}
                gap={"3"}
              >
                <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"} color={"iris"}>
                  {val.platform}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.rank} with peak rank of {val.peakRank}
                </Heading>
                <Link href={val.url} underline={"hover"} asChild={true}>
                  <Button variant={"surface"}>
                    <Link2Icon />
                    Profile link
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Blockquote>
        ))}
      </Flex>
    </Section>
  );
}
