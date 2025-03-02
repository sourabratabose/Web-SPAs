import { Box, Container, Flex, Theme } from "@radix-ui/themes";
import Header from "./components/Header";
import ThemeContextData from "./types/ThemeContextData";
import { useContext } from "react";
import { ThemePresets } from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";

function App() {
  const { currentTheme }: ThemeContextData = useContext(ThemePresets);
  return (
    <Theme appearance={currentTheme} accentColor={"iris"} grayColor={"gray"} radius={"medium"}>
      <Header />
      <Container align={"center"} size={"4"}>
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={"5"}
          justify={"center"}
          align={{ initial: "center", md: "start" }}
          mx={"5"}
          mt={"80px"}
        >
          <Box minWidth={{ md: "448px" }} width={"100%"} px={"3"} position={{ initial: "static", md: "sticky" }} top={"80px"}>
            <Hero />
            <Contact />
          </Box>
          <Flex
            gap={"5"}
            direction={"column"}
            align={"center"}
            justify={"start"}
          >
            <About />
            <Skills />
            <Projects/>
            <Education />
            <CodingProfiles />
            <Certifications/>
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </Theme>
  );
}

export default App;
