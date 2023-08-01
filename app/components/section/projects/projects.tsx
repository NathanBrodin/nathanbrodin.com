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
      <div className="flex flex-col gap-16">
        <PlantWatering />
        <GrammarChecker />
      </div>
    </section>
  );
}
