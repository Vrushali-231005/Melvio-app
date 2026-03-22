import { createContext, useContext, useState } from "react";

const colors = {
  light: {
    bg: "#f4e2d1",
    text: "#573d36",
    "text-secondary": "#b16a59",
    card: "#edaa8a",
    primary: "#b16a59",
    secondary: "#ea9178",
    accent: "#c17a6a",
  },
  dark: {
    bg: "#0b1d32",
    text: "#ffffff",
    "text-secondary": "#a0aec0",
    card: "#172a42",
    primary: "#80AACC",
    secondary: "#A8C8E8",
    accent: "#4878A0",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
 