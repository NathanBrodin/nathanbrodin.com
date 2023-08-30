"use client";
import { useEffect, useState } from "react";
import HackedTexts from "../../ui/texts/hackedTexts";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const age = getMyAge();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  let initialClip = 95;
  if (width > 640) {
    initialClip = 95;
  } else if (width > 768) {
    initialClip = 95;
  }

  function getMyAge() {
    const birthDate = new Date("2002-07-07");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <section
      id="home"
      className="home-gradient sticky top-[calc(-105vh+4em)] z-20 flex h-[105vh] items-center lg:top-[calc(-105vh+5rem)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
          }}
          className="text-xl font-bold text-gray-300 md:text-2xl lg:text-3xl"
        >{`Hi, I'm`}</motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.1] lg:col-span-2 lg:text-8xl lg:leading-[1.125em]"
        >
          Nathan Brodin
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-lg font-medium leading-[1.4] text-gray-300 lg:text-xl"
        >
          A {age} years old{" "}
          <HackedTexts>
            <li>software engineer</li>
            <li>front-end engineer</li>
            <li>react developer</li>
          </HackedTexts>{" "}
          from France.
        </motion.div>
        <div className="mt-4 flex gap-2 text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
            }}
            className="flex"
          >
            <Link
              href={"/CV.pdf"}
              target="_blank"
              className="group relative overflow-hidden rounded-full bg-primary px-4 py-2 font-medium"
            >
              <span className="absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-90">
                <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-secondary blur-lg"></span>
                <span className="absolute right-0 top-0 -mr-10 h-24 w-24 rounded-full bg-secondary blur-lg"></span>
              </span>
              <div className="relative flex gap-2">
                <span>Download my CV</span>
                <Download className="w-5" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className="relative"
          >
            <Link
              href={"https://github.com/NathanBrodin"}
              target="_blank"
              className="group flex items-center justify-center rounded-full bg-white p-2 text-gray-500 transition-colors hover:text-primary"
            >
              <Github />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
            }}
          >
            <Link
              href={"https://www.linkedin.com/in/nathan-brodin/"}
              target="_blank"
              className="flex items-center justify-center rounded-full bg-white p-2 text-gray-500 transition-colors hover:text-primary"
            >
              <Linkedin />
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute right-0 mr-12 h-32 w-32 lg:mr-28 lg:h-96 lg:w-96">
        <svg
          className="absolute -left-10 top-0 animate-blob fill-current text-primary opacity-70 blur-xl filter"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.2,-46.6C63.8,-31.3,60.5,-9.1,53.4,8.3C46.3,25.7,35.4,38.2,22,44.1C8.6,49.9,-7.3,49,-26.4,44C-45.6,38.9,-68,29.8,-72.2,15.4C-76.4,0.9,-62.3,-18.8,-47.3,-35.4C-32.2,-52,-16.1,-65.4,3.1,-67.9C22.3,-70.4,44.7,-61.9,54.2,-46.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="animation-delay-2000 absolute animate-blob self-center fill-current text-secondary opacity-70 blur-xl filter"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.5,-36.8C49.7,-18.7,55.6,-2.3,55,17.5C54.4,37.3,47.4,60.5,31.8,69.1C16.3,77.7,-7.7,71.8,-22.6,59.7C-37.6,47.6,-43.6,29.5,-48.9,10C-54.2,-9.4,-59,-30.1,-50.7,-47.8C-42.5,-65.5,-21.2,-80.2,-3.3,-77.5C14.6,-74.9,29.3,-55,39.5,-36.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="animation-delay-4000 absolute -bottom-8 left-20 animate-blob fill-current text-primary opacity-70 blur-xl filter"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.6,-41.3C68.7,-25.8,76.8,-3.2,72.2,16.2C67.5,35.6,50.1,51.7,30.1,60.7C10,69.7,-12.7,71.6,-34.2,64C-55.8,56.3,-76.2,39.2,-80,19.3C-83.8,-0.7,-70.8,-23.4,-54.7,-39.4C-38.6,-55.3,-19.3,-64.5,0.4,-64.9C20.2,-65.2,40.4,-56.8,54.6,-41.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
}
