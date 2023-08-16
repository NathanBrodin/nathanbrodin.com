"use client";
import ProjectCard from "@/app/components/ui/cards/projectCard";
import HomePage from "./homePage";

import React, { createContext, useContext, useState, ReactNode } from "react";
import WebPage from "@/app/components/ui/frame/webPage";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default function GrammarChecker() {
  return (
    <ProjectCard
      year="2021"
      projectType="Personal project"
      projectName="Grammar Checker"
      description="I developed a grammar correction tool using the GPT-3 API, inspired by
          Quillbot's UI. Built with Next.js and TailwindCSS, my application
          is fully responsive, features light/dark modes, and puts a personal
          twist on the traditional design, demonstrating my front-end
          engineering and AI integration skills."
      stack={["Next.js", "Tailwind CSS"]}
      repoLink="https://github.com/NathanBrodin/grammar-checker"
    >
      <WebPage>
        <ThemeProvider>
          <HomePage />
        </ThemeProvider>
      </WebPage>
    </ProjectCard>
  );
}
