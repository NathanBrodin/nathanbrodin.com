import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Hamburger from "../public/icons/hamburger.svg";

export default function MobileDropdown() {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-end py-2 md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-0 py-2 text-sm text-gray-300 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Hamburger className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md bg-black bg-opacity-20 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500" : "text-white"
                    } group flex w-full items-center rounded-md px-2 text-sm`}
                  >
                    <Link href="/">
                      <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                        {t("home")}
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500" : "text-white"
                    } group flex w-full items-center rounded-md px-2 text-sm`}
                  >
                    <Link href="#projects" scroll={false}>
                      <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                        {t("projects")}
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500" : "text-white"
                    } group flex w-full items-center rounded-md px-2 text-sm`}
                  >
                    <Link href="#about" scroll={false}>
                      <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                        {t("about")}
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500" : "text-white"
                    } group flex w-full items-center rounded-md px-2 text-sm`}
                  >
                    <Link href="#contact" scroll={false}>
                      <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                        {t("contact")}
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
