import { useTheme } from "./ThemeContext"; 
 
export const useAppTheme = () => { 
  const { isDark } = useTheme(); 
 
  return { 
    bg: isDark ? "bg-dark-bg" : "bg-light-bg", 
    text: isDark ? "text-dark-text" : "text-light-text", 
    card: isDark ? "bg-dark-card" : "bg-light-card", 
    primary: isDark ? "text-dark-primary" : "text-light-primary", 
  }; 
};