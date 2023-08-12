import ProjectCard from "../../ui/cards/projectCard";
import Heading from "../../ui/heading/Heading";
import GrammarChecker from "./grammarChecker";
import PlantWatering from "./plantWatering";

export default function Projects() {
  // TODO: ADD PARALAX TO BG: https://www.youtube.com/watch?v=gxWSju6jxEA&t=174s

  return (
    <section id="projects" className="flex flex-col justify-center w-full">
      <Heading
        title="My projects"
        subtitle="Here's an overview of some of the projects I've worked on."
      />
      <div className="flex flex-col gap-16 lg:gap-36 mx-auto w-full max-w-7xl items-center">
        <PlantWatering />
        <GrammarChecker />
        <div className="grid grid-flow-dense grid-cols-2 gap-8">
          <ProjectCard
            year="2021"
            projectType="Personal project"
            projectName="Grammar Checker"
            description="I developed a grammar correction tool using the GPT-3 API, inspired by
          Quillbot's UI. Built with Next.js and TailwindCSS, my application
          is fully responsive, features light/dark modes, and puts a personal
          twist on the traditional design, demonstrating my front-end
          engineering and AI integration skills."
            stack={["Next.js", "Tailwind CSS"]}
            repoLink="https://github.com/NathanBrodin/grammar-checker"
          />
          <ProjectCard
            year="2021"
            projectType="Personal project"
            projectName="Grammar Checker"
            description="I developed a grammar correction tool using the GPT-3 API, inspired by
        Quillbot's UI. Built with Next.js and TailwindCSS, my application
        is fully responsive, features light/dark modes, and puts a personal
        twist on the traditional design, demonstrating my front-end
        engineering and AI integration skills."
            stack={["Next.js", "Tailwind CSS"]}
            repoLink="https://github.com/NathanBrodin/grammar-checker"
          >
            <div className="w-full h-full bg-teal-200 rounded-lg"></div>
          </ProjectCard>
          <ProjectCard
            year="2021"
            projectType="Personal project"
            projectName="Grammar Checker"
            description="I developed a grammar correction tool using the GPT-3 API, inspired by
      Quillbot's UI. Built with Next.js and TailwindCSS, my application
      is fully responsive, features light/dark modes, and puts a personal
      twist on the traditional design, demonstrating my front-end
      engineering and AI integration skills."
            stack={["Next.js", "Tailwind CSS"]}
            repoLink="https://github.com/NathanBrodin/grammar-checker"
          />
          <ProjectCard
            year="2021"
            projectType="Personal project"
            projectName="Grammar Checker"
            description="I developed a grammar correction tool using the GPT-3 API, inspired by
    Quillbot's UI. Built with Next.js and TailwindCSS, my application
    is fully responsive, features light/dark modes, and puts a personal
    twist on the traditional design, demonstrating my front-end
    engineering and AI integration skills."
            stack={["Next.js", "Tailwind CSS"]}
            repoLink="https://github.com/NathanBrodin/grammar-checker"
          />
          <ProjectCard
            year="2021"
            projectType="Personal project"
            projectName="Grammar Checker"
            description="I developed a grammar correction tool using the GPT-3 API, inspired by
          Quillbot's UI. Built with Next.js and TailwindCSS, my application
          is fully responsive, features light/dark modes, and puts a personal
          twist on the traditional design, demonstrating my front-end
          engineering and AI integration skills."
            stack={["Next.js", "Tailwind CSS"]}
            repoLink="https://github.com/NathanBrodin/grammar-checker"
          />
        </div>
      </div>
    </section>
  );
}
