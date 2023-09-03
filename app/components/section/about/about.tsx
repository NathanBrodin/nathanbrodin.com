"use client";

import Heading from "../../ui/heading/Heading";

export default function About() {
  return (
    <section id="about" className="flex w-full flex-col justify-center">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div className="relative h-[800px]"></div>
    </section>
  );
}
