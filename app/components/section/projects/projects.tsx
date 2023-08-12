import { MeteorPreview } from "../../ui/cards/meteorCard";
import ProjectCard from "../../ui/cards/projectCard";
import Heading from "../../ui/heading/Heading";
import GrammarChecker from "./grammarChecker";
import PlantWatering from "./plantWatering";
import Sokoban from "./sokoban";

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
        <Sokoban />
        <div className="grid grid-flow-dense grid-cols-2 gap-8">
          <MeteorPreview />
        </div>
      </div>
    </section>
  );
}
