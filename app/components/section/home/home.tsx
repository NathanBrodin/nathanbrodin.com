"use client";
import { useEffect, useState } from "react";
import HackedTexts from "../../ui/texts/hackedTexts";

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
      className="sticky h-[105vh] top-[calc(-105vh+4em)] lg:top-[calc(-105vh+5rem)] z-20 home-gradient flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300">{`Hi, I'm`}</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.1] lg:col-span-2 lg:text-8xl lg:leading-[1.125em]">
          Nathan Brodin
        </h1>
        <div className="text-lg leading-[1.4] text-gray-300 lg:text-xl font-medium">
          A {age} years old{" "}
          <HackedTexts>
            <li>software engineer</li>
            <li>front-end engineer</li>
            <li>react developer</li>
          </HackedTexts>{" "}
          from France.
        </div>
      </div>
    </section>
  );
}
