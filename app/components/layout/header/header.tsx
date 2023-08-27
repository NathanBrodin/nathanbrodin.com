"use client";
import { useEffect, useState, Fragment, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/app/media/Logo";
import { motion } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

interface Page {
  name: string;
  link: string;
}

const pages: Page[] = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/#projects" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
];

export default function Header() {
  const currentSectionRef = useRef("home");
  const showRef = useRef(false);
  const [, setRender] = useState({});

  useEffect(() => {
    function handleScroll() {
      let currentSection = "home";

      pages.forEach((page) => {
        const element = document.getElementById(page.name.toLowerCase());
        const rect = element?.getBoundingClientRect();

        if (rect!.top <= window.innerHeight * 0.5) {
          currentSection = page.name.toLowerCase();
        }
      });

      currentSectionRef.current = currentSection;

      const homeSection = document.getElementById("home");
      const homeSectionBottomY = homeSection?.getBoundingClientRect().bottom;
      const isBottom =
        window.innerHeight + window.scrollY >= homeSectionBottomY! * 4;
      showRef.current = isBottom;

      setRender({});
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
    <header className="fixed z-30 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 ">
        <div className="flex h-16  items-center justify-between lg:h-20">
          <Link href="/" className="inline-flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Logo />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={showRef.current ? "visible" : "hidden"}
              variants={nameVariants}
              className="text-white font-extrabold text-xl"
            >
              Nathan Brodin
            </motion.div>
          </Link>
          <div className="items-center hidden space-x-10 py-0.5 sm:flex">
            {pages.map((page: Page, index: number) => (
              <motion.div
                key={page.name}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.2 * index,
                }}
              >
                <Link
                  href={page.link}
                  data-section={page.name.toLowerCase()}
                  className={`text-sm font-semibold transition-all duration-500 hover:text-primary ${
                    currentSectionRef.current === page.name.toLowerCase()
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  {page.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="block sm:hidden">
            <Menu>
              <Menu.Button className="hover:bg-gray-500 hover:bg-opacity-50 hover:rounded">
                <MenuIcon className="w-8 text-white" />
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
                <Menu.Items className="absolute right-0 mt-4 w-full pr-4 origin-top-left focus:outline-none flex justify-end py-2 bg-gradient-to-r from-[#1D1E23]/90 to-[#2D3D4B]">
                  {pages.map((page: Page) => {
                    return (
                      <Menu.Item key={page.name}>
                        {({ active }) => (
                          <Link
                            href={page.link}
                            className={`font-bold transition-all first:border-none border-l border-white/10 px-4 py-0.5 duration-500  ${
                              currentSectionRef.current ===
                              page.name.toLowerCase()
                                ? "text-primary"
                                : "text-white"
                            }
                        ${active && "bg-primary/50 rounded-md text-white "}
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
        </div>
      </div>
    </header>
  );
}
