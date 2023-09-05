"use client";

import Heading from "../../ui/heading/Heading";
import Recommandations from "./recommandations";

export default function About() {
  return (
    <section id="about" className="flex w-full flex-col justify-center">
      <Heading title="About" subtitle="Here's some infos about me." />
      <div className="mx-auto mb-28 w-full max-w-7xl">
        <Recommandations />
      </div>
    </section>
  );
}
