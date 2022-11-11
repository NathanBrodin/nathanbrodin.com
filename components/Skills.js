import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";

import Android from "../public/skills/android.svg";
import C from "../public/skills/c.svg";
import Csharp from "../public/skills/csharp.svg";
import Css from "../public/skills/css.svg";
import Firebase from "../public/skills/firebase.svg";
import Html from "../public/skills/html.svg";
import Illustrator from "../public/skills/illustrator.svg";
import Indesign from "../public/skills/indesign.svg";
import Javascript from "../public/skills/javascript.svg";
import Kotlin from "../public/skills/kotlin.svg";
import NextJS from "../public/skills/nextJS.svg";
import Photoshop from "../public/skills/photoshop.svg";
import Python from "../public/skills/python.svg";
import ReactJS from "../public/skills/reactJS.svg";
import Sql from "../public/skills/sql.svg";
import Tailwindcss from "../public/skills/tailwindcss.svg";

export default function Skills() {
  const { t } = useTranslation("about");
  
  return (
    <div className="w-full rounded-2xl border border-neutral-600 bg-white/[0.1] sm:mx-16 sm:rounded-xl">
      <Tab.Group>
        <Tab.List className="flex w-full items-center justify-around rounded-t-2xl bg-neutral-900/95 px-2 py-2 sm:rounded-t-xl">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-primary-500 outline-0" : "text-white"
                } h-full w-full rounded-xl px-2 py-2 text-xs font-medium sm:rounded-2xl sm:px-4 sm:text-base`}
              >
                {t("skills_section_1_title")}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-primary-500 outline-0" : "text-white"
                } h-full w-full rounded-xl px-2 py-2 text-xs font-medium sm:rounded-2xl sm:px-4 sm:text-base`}
              >
                {t("skills_section_2_title")}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-primary-500 outline-0" : "text-white"
                } h-full w-full rounded-xl px-2 py-2 text-xs font-medium sm:rounded-2xl sm:px-4 sm:text-base`}
              >
                {t("skills_section_3_title")}
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${
                  selected ? "bg-primary-500 outline-0" : "text-white"
                } h-full w-full rounded-xl px-2 py-2 text-xs font-medium sm:rounded-2xl sm:px-4 sm:text-base`}
              >
                {t("skills_section_4_title")}
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-full rounded-b-2xl bg-neutral-900/95 p-6 sm:rounded-b-xl">
          <Tab.Panel>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              <div className="flex flex-col items-center justify-center">
                <C className="z-10 h-12 w-12 sm:h-20 sm:w-20" />
                <p className="z-10 text-xs font-semibold sm:text-base">C</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Csharp className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">C#</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Python className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Python</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Kotlin className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Kotlin</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Android className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Android</p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              <div className="flex flex-col items-center justify-center">
                <ReactJS className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">React.js</p>
              </div>
              <div className="flex flex-col items-center justify-between">
                <NextJS className="mt-1 h-10 w-10 sm:mt-2 sm:h-20 sm:w-20" />
                <p className="text-xs font-medium sm:text-base">Next.js</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Tailwindcss className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Tailwindcss</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Html className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">HTML</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Css className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">CSS</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Javascript className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Javascript</p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              <div className="flex flex-col items-center justify-center">
                <Firebase className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Firebase</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Sql className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">SQL</p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              <div className="flex flex-col items-center justify-center">
                <Photoshop className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Photoshop</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Indesign className="h-12 w-12 sm:h-24 sm:w-24" />
                <p className="text-xs font-medium sm:text-base">Indesign</p>
              </div>
              <div className="flex flex-col items-center justify-between">
                <Illustrator className="mt-1 h-10 w-10 sm:mt-2 sm:h-20 sm:w-20" />
                <p className="text-xs font-medium sm:text-base">Illustrator</p>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
