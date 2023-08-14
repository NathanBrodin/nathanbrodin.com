import { MeteorPreview } from "../../ui/cards/meteorCard";
import ProjectCard from "../../ui/cards/projectCard";
import Heading from "../../ui/heading/Heading";
import ChatAdminPanel from "./chatAdminPanel";
import GrammarChecker from "./grammarChecker";
import PlantWatering from "./plantWatering";
import Portfolio from "./portfolio";
import Sokoban from "./sokoban";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center w-full">
      <Heading
        title="My projects"
        subtitle="Here's an overview of some of the projects I've worked on."
      />
      <div className="flex flex-col gap-16 lg:gap-36 mx-auto w-full max-w-7xl items-center">
        <PlantWatering />
        <GrammarChecker />
        <Sokoban />
        <ChatAdminPanel />
        <Portfolio />
      </div>
      <div className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 gap-8 mx-auto w-full max-w-7xl">
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
        >
          <div className="h-full w-96 bg-cyan-900 rounded-lg text-white font-bold flex justify-center items-center">Test</div>
        </ProjectCard>
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["This", "Also this", "And that"]}
        >
          <div className="h-full w-96 bg-slate-500 rounded-lg">Test</div>
        </ProjectCard>
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["This", "Also this", "And that"]}
        >
          <div className="h-full w-96 bg-slate-500 rounded-lg">Test</div>
        </ProjectCard>
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["This", "Also this", "And that"]}
        >
          <div className="h-full w-96 bg-slate-500 rounded-lg">Test</div>
        </ProjectCard>
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="testing stuffs"
          stack={["This", "Also this", "And that"]}
        />
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="testing stuffs"
          stack={["This", "Also this", "And that"]}
        />
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["This", "Also this", "And that"]}
        />
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="I developed a grammar correction tool using the GPT-3 API, inspired by
            Quillbot's UI. Built with Next.js and TailwindCSS, my application
            is fully responsive, features light/dark modes, and puts a personal
            twist on the traditional design, demonstrating my front-end
            engineering and AI integration skills."
          stack={["This", "Also this", "And that"]}
        />
        <ProjectCard
          year="2050"
          projectName="Testing"
          description="testing stuffs"
          stack={["This", "Also this", "And that"]}
        />
      </div>
    </section>
  );
}
