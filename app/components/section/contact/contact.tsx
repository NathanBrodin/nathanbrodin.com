"use client";

import Heading from "../../ui/heading/Heading";
import ContactLink, { ContactLinkProps } from "./contactLink";
import Figma from "./icons/figma";
import Github from "./icons/github";
import Gitlab from "./icons/gitlab";
import Linkedin from "./icons/linkedin";

// https://worldvectorlogo.com/
export type IconProps = {
  className: string
}

const ContactLinks: ContactLinkProps[] = [
  {
    link: "https://www.linkedin.com/in/nathan-brodin/",
    content: "in/nathan-brodin",
    Icon: <Linkedin className="h-10 w-10" />,
    delay: 0,
  },
  {
    link: "https://github.com/nathanbrodin",
    content: "NathanBrodin",
    Icon: <Github className="h-10 w-10" />,
    delay: 0.2,
  },
  {
    link: "https://gitlab.com/nathanbrodin",
    content: "NathanBrodin",
    Icon: <Gitlab className="h-10 w-10" />,
    delay: 0.4,
  },
  {
    link: "https://www.figma.com/@nathanbrodin",
    content: "@nathanbrodin",
    Icon: <Figma className="h-10 w-10" />,
    delay: 0.6,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="flex w-full flex-col justify-center mb-44">
      <Heading
        title="Contact"
        subtitle="Interested ? Here's some links to get it touch with me."
      />
      <div className="mx-auto flex w-full max-w-7xl justify-center gap-5 px-4 md:px-6">
        {ContactLinks.map((contactLink, index) => {
          return <ContactLink {...contactLink} key={index}/>
        })}
      </div>
    </section>
  );
}
