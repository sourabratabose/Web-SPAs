export const Themes = ["light", "dark"] as const;

type ThemeContextData = {
  currentTheme: (typeof Themes)[number];
  toggleTheme: (incoming_state?: ThemeContextData["currentTheme"]) => void;
};

export default ThemeContextData;
