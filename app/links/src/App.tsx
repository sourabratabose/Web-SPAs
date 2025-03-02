import { lazy, Suspense, useContext } from "react";
import { Container, Flex, Spinner, Theme } from "@radix-ui/themes";
import { Toast } from "radix-ui";
import ThemeContextData from "./types/ThemeContextData";
import { ThemePresets } from "./contexts/ThemeContext";
import PageDataContext from "./contexts/PageDataContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Links from "./components/Links";
const Actions = lazy(() => import("./components/Actions"));

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
      >
        <Flex
          direction={"column"}
          gap={"5"}
          align={"center"}
          justify={"start"}
          height={"100%"}
        >
          <Suspense
            fallback={
              <Flex align={"center"} justify={"center"} my={"3"} p={"3"}>
                <Spinner size={"3"} />
              </Flex>
            }
          >
            <PageDataContext>
              <Intro />
              <Links />
            </PageDataContext>
          </Suspense>
          <Toast.Provider swipeDirection={"right"} swipeThreshold={100}>
            <Actions />
            <Toast.Viewport className="fixed bottom-15 right-5 z-10 m-0 flex flex-col-reverse gap-5 outline-none max-h-64 list-none" />
          </Toast.Provider>
        </Flex>
      </Container>
      <Footer />
    </Theme>
  );
}

export default App;
