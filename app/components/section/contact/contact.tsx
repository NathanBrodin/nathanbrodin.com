"use client";

import { useInView } from "react-intersection-observer";
import Heading from "../../ui/heading/Heading";
import ContactLink, { ContactLinkProps } from "./contactLink";
import Figma from "./icons/figma";
import Github from "./icons/github";
import Gitlab from "./icons/gitlab";
import Linkedin from "./icons/linkedin";

// https://worldvectorlogo.com/
export type IconProps = {
  className: string;
};

const ContactLinks: ContactLinkProps[] = [
  {
    link: "https://www.linkedin.com/in/nathan-brodin/",
    content: "in/nathan-brodin",
    Icon: <Linkedin className="h-8 w-8 lg:h-10 lg:w-10" />,
    delay: 0,
  },
  {
    link: "https://github.com/nathanbrodin",
    content: "NathanBrodin",
    Icon: <Github className="h-8 w-8 lg:h-10 lg:w-10" />,
    delay: 0.2,
  },
  {
    link: "https://gitlab.com/nathanbrodin",
    content: "NathanBrodin",
    Icon: <Gitlab className="h-8 w-8 lg:h-10 lg:w-10" />,
    delay: 0.4,
  },
  {
    link: "https://www.figma.com/@nathanbrodin",
    content: "@nathanbrodin",
    Icon: <Figma className="h-8 w-8 lg:h-10 lg:w-10" />,
    delay: 0.6,
  },
];

export default function Contact() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // at least 10% of the element is visible
  });

  return (
    <section id="contact" className="mb-44 flex w-full flex-col justify-center">
      <Heading
        title="Contact"
        subtitle="Interested ? Here's some links to get it touch with me."
      />
      <div
        ref={inViewRef}
        className="mx-auto flex w-full max-w-7xl justify-center gap-5 px-4 md:px-6"
      >
        {ContactLinks.map((contactLink, index) => {
          return <ContactLink {...contactLink} key={index} inView={inView} />;
        })}
      </div>
    </section>
  );
}
