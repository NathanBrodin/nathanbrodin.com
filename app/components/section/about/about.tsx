"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Heading from "../../ui/heading/Heading";

export default function About() {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="flex w-full flex-col justify-center">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div
        ref={ref}
        className="mx-auto h-[800px] w-full max-w-7xl bg-white/50 px-4 md:px-6"
      >
        <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-gray-400"></div>
        <div className="fixed bottom-2/3 left-1/2 z-10 h-6 w-6 -translate-x-1/2 transform rounded-full border-[2px] border-white ring-[2px] ring-primary transition-transform duration-500"></div>
        <motion.div
          style={{ scaleY: 0 }}
          className="fixed bottom-2/3 left-1/2 z-10 h-[300px] w-[2px] origin-bottom  -translate-x-1/2 bg-primary"
        ></motion.div>
      </div>
    </section>
  );
}
