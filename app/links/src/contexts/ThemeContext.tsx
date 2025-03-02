import { Context, createContext, ReactNode, useEffect, useState } from "react";
import type ThemeContextData from "../types/ThemeContextData";
import { Themes } from "../types/ThemeContextData";

export const ThemePresets: Context<ThemeContextData> =
  createContext<ThemeContextData>({
    currentTheme: "light",
    toggleTheme: () => null,
  });

export default function ThemeContext({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeContextData["currentTheme"]>("dark");

  useEffect(() => {
    if (window == null) return;
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    else setTheme("light");
    
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme != null) {
      Themes.forEach((possibleThemeValue: typeof Themes[number]) => {
        if (storedTheme == possibleThemeValue) setTheme(storedTheme);
      });
    } else localStorage.setItem("theme", theme);
  }, []);

  return (
    <ThemePresets.Provider
      value={{
        currentTheme: theme,
        toggleTheme: (incoming_state?: ThemeContextData["currentTheme"]) => setTheme(prev_state => {
          if (incoming_state == undefined) {
            const new_state: ThemeContextData["currentTheme"] = prev_state == "dark" ? "light" : "dark";
            localStorage.setItem("theme", new_state);
            return new_state
          } else {
            localStorage.setItem("theme", incoming_state);
            return incoming_state;
          }
        })
      }}
    >
      {children}
    </ThemePresets.Provider>
  );
}
