import {
  ChevronDownIcon,
  ChevronUpIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Callout,
  Card,
  Em,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";

export default function Intro() {
  const [expanded, setExpand] = useState<boolean>(false);
  return (
    <>
      <Card className="shadow-iris-a5/60 shadow-lg">
        <Flex
          direction={{ initial: "column", xs: "row" }}
          justify={"center"}
          align={{ initial: "center", xs: "start" }}
          gap={"5"}
          width={"100%"}
        >
          <Avatar
            size={"9"}
            variant={"solid"}
            fallback={"Sourabrata Bose"}
            src={""}
          />
          <Flex direction={"column"} as={"div"} gap={"4"} justify={"between"}>
            <Heading
              size={"6"}
              as={"h1"}
              align={{ initial: "center", xs: "left" }}
              weight={"bold"}
              wrap={"pretty"}
            >
              It's me <span className="text-nowrap">Sourabrata Bose</span>
            </Heading>
            <Text
              align={{ initial: "center", xs: "left" }}
              className={
                "text-ellipsis" + " " + (expanded ? "" : "line-clamp-2")
              }
            >
              Hi there, I am Sourabrata Bose. A passionate web designer and
              fullstack web developer using <Em>Javascript/Typescript</Em> and{" "}
              <Em>Solidity</Em>.
            </Text>
            <Box className={"overflow-hidden" + " " + (expanded ? "h-auto" : "h-0")}>
              <Text align={{ initial: "center", xs: "left" }}>
                I primarily code and develop projects in Javascript and/or
                Typescript as needed. <br />
                I use Solidity and Hardhat suit to develop smart contracts on
                the Ethereum blockchain but also learning Rust and Anchor to
                develop solana smart contracts.
                <br />
                For frontend of my projects I use React for both web and desktop
                application development. For mobile I use React Native with Expo
                and EAS.
                <br />
                For backend I primarily use BunJS for a newer alternative to
                NodeJS, Drizzle ORM with PostgreSQL or SQLite for RDBMS and
                Mongoose with MongoDB for NoSQL database.
              </Text>
            </Box>
            <Flex
              direction={"row"}
              align={"center"}
              justify={"end"}
              mt={"auto"}
            >
              <Button
                variant={expanded ? "surface" : "solid"}
                onClick={() => setExpand((prev_state) => !prev_state)}
              >
                Read {expanded ? "Less" : "More"}
                {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <Callout.Root
        variant={"surface"}
        className="w-full flex items-start sm:items-center justify-start"
      >
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text className="flex items-start sm:items-center justify-start gap-2 text-ellipsis overflow-hidden">
          <Text weight={"bold"} size={"2"} as={"span"} className="text-nowrap">
            Status :&nbsp;
          </Text>
          <Text align={"left"} as={"span"} size={"2"}>
            I am Engineering my limits.
          </Text>
        </Callout.Text>
      </Callout.Root>
    </>
  );
}
