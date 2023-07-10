"use client";
import { Logo } from "@/app/media/Logo";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [show, setShow] = useState(false);

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <header className="fixed w-full top-0 left-0 p-4 md:p-8 flex text-white justify-between items-center backdrop-blur bg-gray-500 bg-opacity-20">
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
      <div className="hidden md:block">
        {pages.map((page) => (
          <Link
            href={page.link}
            key={page.name}
            data-section={page.name.toLowerCase()}
            className="font-bold m-4 transition-all duration-500"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </header>
  );
}

const pages = [
  { name: "Home", link: "/home" },
  { name: "Projects", link: "/home" },
  { name: "About", link: "/home" },
  { name: "Contact", link: "/home" },
];
