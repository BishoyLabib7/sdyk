import { useState } from "react";

export function useThemeStore() {
  const [theme, setTheme] = useState("forest");
  const setAppTheme = (theme) => {
    setTheme(theme);
  };
  return { theme, setTheme: setAppTheme };
}
