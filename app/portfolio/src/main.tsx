import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import ThemeContext from "./contexts/ThemeContext.tsx";
import PageDataContext from "./contexts/PageDataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContext>
      <PageDataContext>
        <App />
      </PageDataContext>
    </ThemeContext>
  </StrictMode>
);
