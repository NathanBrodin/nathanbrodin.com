"use client";
import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { Logo } from "@/app/media/Logo";
import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";

interface Page {
  name: string;
  link: string;
}

const pages: Page[] = [
  { name: "Home", link: "/home" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [currentSection, setCurrentSection] = useState<string>("home");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      let currentSection = "home";

      pages.forEach((page) => {
        const element = document.getElementById(page.name.toLowerCase());
        const rect = element?.getBoundingClientRect();

        if (rect!.top <= window.innerHeight * 0.8) {
          currentSection = page.name.toLowerCase();
        }
      });

      setCurrentSection(currentSection);

      const homeSection = document.getElementById("home");
      const homeSectionBottomY = homeSection?.getBoundingClientRect().bottom;
      const isBottom =
        window.innerHeight + window.scrollY >= homeSectionBottomY! * 2;
      setShow(isBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <header className="fixed w-full z-20 top-0 left-0 p-4 md:p-8 flex text-white justify-between items-center">
      <Link href="/" className="flex items-center gap-4">
        <Logo />
        <motion.div
          initial="hidden"
          animate={show ? "visible" : "hidden"}
          variants={nameVariants}
          className="text-white font-[900] text-2xl"
        >
          Nathan Brodin
        </motion.div>
      </Link>
      <div className="hidden sm:block">
        {pages.map((page: Page) => (
          <Link
            href={page.link}
            key={page.name}
            data-section={page.name.toLowerCase()}
            className={`font-bold m-4 transition-all duration-500 ${
              currentSection === page.name.toLowerCase()
                ? "text-primary"
                : "text-white"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className="block sm:hidden">
        <Menu>
          <Menu.Button className="hover:bg-gray-500 hover:bg-opacity-50 hover:rounded">
            <Bars3Icon className="w-8" />
          </Menu.Button>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-left  focus:outline-none flex flex-col">
              {pages.map((page: Page) => {
                return (
                  <Menu.Item key={page.name}>
                    {({ active }) => (
                      <Link
                        href={page.link}
                        className={`font-bold transition-all duration-500 ${
                          currentSection === page.name.toLowerCase()
                            ? "text-primary"
                            : "text-white"
                        }
                        ${active && "bg-primary "}
                        `}
                      >
                        {page.name}
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
