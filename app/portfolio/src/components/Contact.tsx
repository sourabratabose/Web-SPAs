import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  Button,
  Container,
  Dialog,
  Flex,
  Heading,
  Link,
  Strong,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";

export default function Contact() {
  return (
    <Flex
      direction={"column"}
      gap={"5"}
      my={"5"}
      align={{ initial: "center", md: "start" }}
      justify={"center"}
      width={"100%"}
    >
      <Heading
        as={"h1"}
        size={"8"}
        weight={"bold"}
        align={{ initial: "center", md: "left" }}
      >
        Want to work together?
      </Heading>
      <Text weight={"light"} size={"3"} align={"left"}>
        You can email me at <Strong>bose.sourabrata21century@gmail.com</Strong>
      </Text>
      <Flex align={"center"} justify={"between"} gap={"5"} width={"100%"}>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Message Me</Button>
          </Dialog.Trigger>

          <Dialog.Content>
            <Container align={"center"} size={"2"}>
              <Dialog.Title>Your Message</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Send me a message and I will get back to you within 2 - 3
                working days.
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Your Name
                  </Text>
                  <TextField.Root placeholder="Enter your full name" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Contact E-Mail
                  </Text>
                  <TextField.Root placeholder="Enter your email" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Company Name{" "}
                    <Text as={"span"} color={"gray"} weight={"regular"}>
                      ( Optional )
                    </Text>
                  </Text>
                  <TextField.Root placeholder="Enter your company name" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Your Message
                  </Text>
                  <TextArea placeholder="Your Message..." />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Submit</Button>
                </Dialog.Close>
              </Flex>
            </Container>
          </Dialog.Content>
        </Dialog.Root>
        <Link href={""} underline={"hover"} asChild={true}>
          <Button variant={"surface"}>
            E - Mail Me <EnvelopeClosedIcon />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
