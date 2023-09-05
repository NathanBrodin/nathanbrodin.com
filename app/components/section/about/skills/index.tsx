import React from "react";
import SkillsCard, { SkillsCardProps } from "./skillsCard";

const SkillsData: SkillsCardProps[] = [
  {
    name: "React.js",
  },
  {
    name: "Next.js",
  },
  {
    name: "Redux.js",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Framer motion",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "Styled component",
  },
  {
    name: "Flutter",
  },
  {
    name: "Dart",
  },
  {
    name: "Python",
  },
  {
    name: "C",
  },
  {
    name: "AWS",
  },
];

export default function Skills() {
  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">My different skills</h2>
      <div
        className="mt-8 flex w-full flex-wrap justify-center gap-2 px-32"
      >
        {SkillsData.map((skill, index) => {
          return <SkillsCard {...skill} delay={index * 0.1} key={index} />;
        })}
      </div>
    </div>
  );
}
