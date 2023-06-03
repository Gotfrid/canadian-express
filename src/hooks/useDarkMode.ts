import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const unsubscribe = window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      const colorScheme = event.matches ? "dark" : "light";
      console.log(colorScheme);
      setMode(colorScheme);
    });
    return unsubscribe;
  }, []);

  return mode;
};
