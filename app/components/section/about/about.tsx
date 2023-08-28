"use client";

import React, { useEffect, useState, useRef } from "react";
import Heading from "../../ui/heading/Heading";
import { motion } from "framer-motion";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyTop = stickyRef.current?.getBoundingClientRect().top;
      const parentTop = parentRef.current?.getBoundingClientRect().top;
      const parentHeight = parentRef.current?.getBoundingClientRect().height;
      const stickyHeight = stickyRef.current?.getBoundingClientRect().height;

      const progress =
        ((stickyTop! - parentTop!) / (parentHeight! - stickyHeight!)) * 100;

      setScrollY(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="flex flex-col justify-center w-full">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div
        ref={parentRef}
        className="bg-white/50 mx-auto w-full max-w-7xl px-4 md:px-6 h-[800px] relative"
      >
        <motion.div
          style={{
            background: `linear-gradient(to bottom, #FFCC4D 0%, #FFCC4D ${scrollY}%, #EEECE5 ${scrollY}%, #EEECE5 100%)`,
          }}
          className="w-1 h-full bg-black left-1/2 -translate-x-1/2 absolute"
        ></motion.div>
        <div
          ref={stickyRef}
          className="w-8 h-8 rounded-full bg-blue-950 left-1/2 top-1/3 -translate-x-1/2 sticky"
        ></div>
      </div>
    </section>
  );
}
