"use client";
import Link from "next/link";
import Logo from "../../../../../public/grammarChecker/logo.svg";
import Main from "./main";
import Image from "next/image";
import { useTheme } from ".";
import { useEffect } from "react";
import { Moon, SunMoon } from "lucide-react";

export default function HomePage() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
    const isDarkMode = theme === "dark";

  return (
    <div className="bg-gray-200 dark:bg-neutral-900 text-black dark:text-white w-full h-full">
      <div className="w-full  bg-white dark:bg-neutral-800 shadow-sm">
        <div className="grid grid-cols-3 justify-between px-2 sm:px-4 py-1.5 sm:py-3 border-b border-b-neutral-300 dark:border-b-neutral-600">
          <div>
            <Link
              href={"https://nathanbrodin.com"}
              passHref={true}
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={Logo}
                alt="logo"
                className="h-6 w-6 sm:mr-3"
              />
              <h1 className="self-center hidden sm:block sm:text-lg font-black whitespace-nowrap text-teal-800">
                Nathan Brodin
              </h1>
            </Link>
          </div>
          <div className="flex items-center place-self-center">
            <h1 className="font-bold text-base sm:text-lg whitespace-nowrap">
              Grammar Checker
            </h1>
          </div>
          <div className="place-self-end">
            <label className="group">
              <input
                className="hidden"
                type="checkbox"
                onClick={toggleTheme}
              />
              <SunMoon
                className={`${
                    !isDarkMode ? "hidden" : "visible"
                } h-6 w-6 rounded-full bg-neutral-900 text-neutral-400 p-1 group-hover:text-teal-800`}
              />
              <Moon
                className={`${
                    isDarkMode ? "hidden" : "visible"
                } h-6 w-6 rounded-full bg-gray-100 text-gray-600 p-1 group-hover:text-teal-800 group-hover:bg-gray-200`}
              />
            </label>
          </div>
        </div>
      </div>
      <Main />
      <div className="text-sm sm:text-base font-italic  px-4 sm:px-8 sm:py-4 py-2">
        Created by Nathan Brodin | This website is a reproduction of
        <Link
          href="https://quillbot.com/grammar-check"
          passHref={true}
          target="_blank"
          className="text-teal-800 dark:text-teal-700 hover:text-teal-600 ml-1"
        >
          Quilbot Grammar Checker
        </Link>
      </div>
    </div>
  );
}
