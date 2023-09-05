"use client";

import Heading from "../../ui/heading/Heading";
import Experience from "./experience";
import Recommandations from "./recommandations";
import Skills from "./skills";

export default function About() {
  return (
    <section id="about" className="flex w-full flex-col justify-center">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div className="mx-auto mb-28 w-full max-w-7xl flex flex-col gap-32">
        <Experience />
        <Skills />
        <Recommandations />
      </div>
    </section>
  );
}
