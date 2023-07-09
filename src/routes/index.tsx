import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/starter/about/about";
import Contact from "~/components/starter/contact/contact";
import Home from "~/components/starter/home/home";
import Projects from "~/components/starter/projects/projects";

export default component$(() => {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: "Portfolio | Nathan Brodin",
  meta: [
    {
      name: "description",
      content: "Here's my portfolio to showcase my projects",
    },
  ],
};
