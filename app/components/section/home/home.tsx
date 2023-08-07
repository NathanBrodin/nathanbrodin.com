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
      <div className="absolute right-0 mr-12 h-32 w-32 lg:mr-28 lg:h-96 lg:w-96">
        <svg
          className="absolute top-0 -left-10 animate-blob fill-current text-primary opacity-70 blur-xl filter"
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
