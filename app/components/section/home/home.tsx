"use client";
import { useEffect, useState } from "react";
import HackedTexts from "../../ui/texts/hackedTexts";

export default function Home() {
  const [backgroundIsSticky, setBackgroundIsSticky] = useState<boolean>(false);

  const data = [
    "software engineer",
    "front-end engineer",
    "react developer",
    "software engineer",
  ];

  useEffect(() => {
    function handleScroll() {
      const isSticky = window.scrollY >= window.innerHeight * 0.9;
      setBackgroundIsSticky(isSticky);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className={`${
        backgroundIsSticky
          ? "fixed w-full z-10 top-0 left-0 -translate-y-[90vh]"
          : ""
      } p-4 md:p-8 h-[110vh] sm-home-clip sm:home-clip home-gradient flex items-center text-white`}
    >
      <div className="sm:ml-8 lg:ml-24 flex flex-col">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300">{`Hi, I'm`}</div>
        <div className="text-6xl md:text-7xl lg:text-8xl font-black">
          Nathan Brodin
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl">
          A 21 years old <HackedTexts>{data}</HackedTexts> from France.
        </div>
      </div>
    </section>
  );
}
