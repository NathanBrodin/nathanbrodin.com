import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import En from "../public/flags/en.svg";
import Fr from "../public/flags/fr.svg";

export default function LanguageDropdown() {
  const router = useRouter();
  const locale = router.locale;

  return (
    <div className="mr-4 flex justify-end p-2">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-ful inline-flex justify-center rounded-md bg-black bg-opacity-0 py-2 text-xs text-gray-300 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:hidden">
            {locale === "en" ? "En" : "Fr"}
          </Menu.Button>
          <Menu.Button className="hidden w-full justify-center rounded-md bg-black bg-opacity-0 px-4 py-2 text-sm text-gray-300 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 sm:inline-flex">
            {locale === "en" ? "English" : "Français"}
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
          <Menu.Items className="glass-bg absolute right-0 mt-2 origin-top-right rounded-lg border border-neutral-700 bg-neutral-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={router.asPath} locale={"en"}>
                      <a href="" className="group flex w-full items-center">
                        <En className="mr-2 h-5 w-5" aria-hidden="true" />
                        English
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
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={router.asPath} locale={"fr"}>
                      <a href="" className="group flex w-full items-center">
                        <Fr className="mr-2 h-5 w-5" aria-hidden="true" />
                        Français
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
