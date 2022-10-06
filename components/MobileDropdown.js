import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import Hamburger from "../public/icons/hamburger.svg"

export default function MobileDropdown() {
    const { t } = useTranslation("common")

  return (
    <div className="flex justify-end p-2 mr-2 md:hidden">
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-gray-300 text-sm bg-black bg-opacity-0 rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <Hamburger className="w-5 h-5" aria-hidden="true"/>
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
            <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-black bg-opacity-20 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
                <Menu.Item>
                {({ active }) => (
                    <button
                    className={`${
                        active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <Link href="/">
                            <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("home")}</a>
                        </Link>
                    </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <button
                    className={`${
                        active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <Link href="#projects" scroll={false} >
                            <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("projects")}</a> 
                        </Link>
                    </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <button
                    className={`${
                        active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <Link href="#about" scroll={false} >
                            <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("about")}</a> 
                        </Link>
                    </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <button
                    className={`${
                        active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <Link href="#contact" scroll={false} >
                            <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("contact")}</a> 
                        </Link>
                    </button>
                )}
                </Menu.Item>
            </div>
            </Menu.Items>
        </Transition>
        </Menu>
  </div>
  )
}
