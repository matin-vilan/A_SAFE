"use client";

import { useThemeToggler } from "@/hooks/useThemeToggler";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeToggler();
  const [mounted, setMounted] = useState(false);

  const handleClick = () => {
    toggleTheme();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-xs bg-background text-foreground rounded w-[50px] animate-pulse" />
    );
  }

  return (
    <>
      <button
        className="text-xs bg-background text-foreground rounded size-[30px]"
        onClick={handleClick}
      >
        {theme === "dark" ? "D" : theme === "neon" ? "N" : "L"}
      </button>
    </>
  );
};
