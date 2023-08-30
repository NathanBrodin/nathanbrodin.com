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
    <div className="h-full w-full bg-gray-200 text-black dark:bg-neutral-900 dark:text-white">
      <div className="w-full  bg-white shadow-sm dark:bg-neutral-800">
        <div className="grid grid-cols-3 justify-between border-b border-b-neutral-300 px-2 py-1.5 dark:border-b-neutral-600 sm:px-4 sm:py-3">
          <div>
            <Link
              href={"https://nathanbrodin.com"}
              passHref={true}
              target="_blank"
              className="flex items-center"
            >
              <Image src={Logo} alt="logo" className="h-6 w-6 sm:mr-3" />
              <h1 className="hidden self-center whitespace-nowrap font-black text-teal-800 sm:block sm:text-lg">
                Nathan Brodin
              </h1>
            </Link>
          </div>
          <div className="flex items-center place-self-center">
            <h1 className="whitespace-nowrap text-base font-bold sm:text-lg">
              Grammar Checker
            </h1>
          </div>
          <div className="place-self-end">
            <label className="group">
              <input className="hidden" type="checkbox" onClick={toggleTheme} />
              <SunMoon
                className={`${
                  !isDarkMode ? "hidden" : "visible"
                } h-6 w-6 rounded-full bg-neutral-900 p-1 text-neutral-400 group-hover:text-teal-800`}
              />
              <Moon
                className={`${
                  isDarkMode ? "hidden" : "visible"
                } h-6 w-6 rounded-full bg-gray-100 p-1 text-gray-600 group-hover:bg-gray-200 group-hover:text-teal-800`}
              />
            </label>
          </div>
        </div>
      </div>
      <Main />
      <div className="px-4 py-2 font-italic  text-sm sm:px-8 sm:py-4 sm:text-base">
        Created by Nathan Brodin | This website is a reproduction of
        <Link
          href="https://quillbot.com/grammar-check"
          passHref={true}
          target="_blank"
          className="ml-1 text-teal-800 hover:text-teal-600 dark:text-teal-700"
        >
          Quilbot Grammar Checker
        </Link>
      </div>
    </div>
  );
}
