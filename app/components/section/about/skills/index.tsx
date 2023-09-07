import React from "react";
import SkillsCard, { SkillsCardProps } from "./skillsCard";
import { useInView } from "react-intersection-observer";
import Python from "@/app/media/logos/python";
import ReactJs from "@/app/media/logos/reactJs";
import NextJs from "@/app/media/logos/nextJs";
import ReduxJs from "@/app/media/logos/reduxJs";
import TailwindCSS from "@/app/media/logos/tailwindCSS";
import FramerMotion from "@/app/media/logos/framerMotion";
import JavaScript from "@/app/media/logos/javaScript";
import TypeScript from "@/app/media/logos/typeScript";
import Html from "@/app/media/logos/html";
import Css from "@/app/media/logos/css";
import StyledComponents from "@/app/media/logos/styledComponents";
import Flutter from "@/app/media/logos/flutter";
import Dart from "@/app/media/logos/dart";
import C from "@/app/media/logos/c";
import Aws from "@/app/media/logos/aws";

const SkillsData: SkillsCardProps[] = [
  {
    name: "React.js",
    icon: <ReactJs />
  },
  {
    name: "Next.js",
    icon: <NextJs />
  },
  {
    name: "Redux.js",
    icon: <ReduxJs />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS />
  },
  {
    name: "Framer motion",
    icon: <FramerMotion />
  },
  {
    name: "JavaScript",
    icon: <JavaScript />
  },
  {
    name: "TypeScript",
    icon: <TypeScript />
  },
  {
    name: "HTML",
    icon: <Html />
  },
  {
    name: "CSS",
    icon: <Css />
  },
  {
    name: "Styled component",
    icon: <StyledComponents />
  },
  {
    name: "Flutter",
    icon: <Flutter />
  },
  {
    name: "Dart",
    icon: <Dart />
  },
  {
    name: "Python",
    icon: <Python />
  },
  {
    name: "C",
    icon: <C />
  },
  {
    name: "AWS",
    icon: <Aws />
  },
];

export default function Skills() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // at least 10% of the element is visible
  });

  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">My different skills</h2>
      <div
        ref={inViewRef}
        className="mt-8 flex w-full flex-wrap justify-center gap-2 md:px-32"
      >
        {SkillsData.map((skill, index) => {
          return (
            <div key={index} className="hover:translate-y-[-6px] transition-transform duration-300">
              <SkillsCard {...skill} delay={index * 0.1} inView={inView} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
