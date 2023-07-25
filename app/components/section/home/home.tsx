"use client";
import HackedTexts from "../../ui/texts/hackedTexts";

export default function Home() {

  const age = getMyAge();

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
      className="p-4 md:p-8 h-[110vh] sticky top-[-96vh] sm:top-[-96vh] md:top-[-92vh] sm-home-clip sm:home-clip home-gradient flex items-center text-white"
    >
      <div className="sm:ml-8 lg:ml-24 flex flex-col items-start">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300">{`Hi, I'm`}</div>
        <div className="text-6xl md:text-7xl lg:text-8xl font-black">
          Nathan Brodin
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl">
          A {age} years old{" "}
          <HackedTexts>
            <li>software engineer</li>
            <li>front-end engineer</li>
            <li>react developer</li>
          </HackedTexts>{" "}
          from France.
        </div>
        <button>Get started</button>
      </div>
    </section>
  );
}
