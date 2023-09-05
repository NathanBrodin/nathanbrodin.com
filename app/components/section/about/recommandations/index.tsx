import React from "react";
import RecommandationCard from "./recommandationCard";

export default function Recommandations() {
  return (
    <div className="flex w-full flex-col items-center ">
      <h2 className="text-lg font-semibold">
        What people say who worked with me
      </h2>
      <div className="mt-8 grid gap-8 md:grid-flow-col md:grid-cols-2">
        <RecommandationCard
          name="Maja Johansen"
          role="Designer & Subject Manager | DNB"
          content="Nathan has been a great addition to our team during his internship. He has shown great understanding for the technology we use as well as eager to learn new things. I would like to especially compliment him for his Frontend development skills. Nathan is quick to learn, works very efficiently, is adaptable, and presents possibilities to improve UI/UX if he sees them. I am very happy to have been working closely with Nathan, and I am sure he will make a great career as a Software Engineer!"
        />
        <RecommandationCard
          delay={0.2}
          name="Kamal Singh"
          role="DevOps Engineer | DNB"
          content="It was a pleasure working with Nathan during his summer internship at DNB. He is an outstanding developer with a strong grasp of web development in React. Additionally, he excels at swiftly acquiring new technologies and applying them productively. I was impressed by his work ethic and punctuality. I wholeheartedly endorse Nathan for web development and beyond."
        />
      </div>
    </div>
  );
}
