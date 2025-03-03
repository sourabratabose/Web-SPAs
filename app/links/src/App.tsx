import { useContext } from "react";
import { Container, Flex, Theme } from "@radix-ui/themes";
import ThemeContextData from "./types/ThemeContextData";
import { ThemePresets } from "./contexts/ThemeContext";
import PageDataContext from "./contexts/PageDataContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Actions from "./components/Actions";

function App() {
  const { currentTheme }: ThemeContextData = useContext(ThemePresets);
  return (
    <Theme appearance={currentTheme} accentColor={"iris"} grayColor={"gray"}>
      <Header />
      <Container
        size={"3"}
        minHeight={"100vh"}
        align={"center"}
        pt={"80px"}
        mx={"5"}
        mb={"5"}
      >
        <Flex
          direction={"column"}
          gap={"5"}
          align={"center"}
          justify={"start"}
          height={"100%"}
        >
          <PageDataContext>
            <Hero />
            <Links />
          </PageDataContext>
          <Actions />
        </Flex>
      </Container>
      <Footer />
    </Theme>
  );
}

export default App;
