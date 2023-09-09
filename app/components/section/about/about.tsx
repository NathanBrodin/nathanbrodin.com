"use client";

import Heading from "../../ui/heading/Heading";
import Experience from "./experience";
import Recommandations from "./recommandations";
import Skills from "./skills";

export default function About() {
  const age = getMyAge();
  const year = currentYear();

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

  function currentYear() {
    let graduateDate = new Date("2020-07-01");
    let yearDifMs = Date.now() - graduateDate.getTime();
    return Math.abs(new Date(yearDifMs).getUTCFullYear() - 1970) + 1;
  }

  return (
    <section id="about" className="flex w-full flex-col justify-center">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div className="mx-auto mb-28 flex w-full max-w-7xl flex-col gap-32">
        <div className="max-w-2xl self-center">
          Hi! My name is Nathan Brodin, I&apos;m {age}, and I develop things in
          my free time. I like programming and I&apos;m always looking for new
          challenges. I created websites, mobile apps, and more...
          <br />
          <br />
          In 2020, I entered the ESIEA French Engineering School as an IT major
          to learn more about math, science, and software development. I&apos;m
          in the {year} year of my studies (out of five). I discovered a lot of
          technologies and theoretical concepts, but I also put my knowledge
          into practice in various projects (see the project part of the site).
        </div>
        <Experience />
        <Skills />
        <Recommandations />
      </div>
    </section>
  );
}
