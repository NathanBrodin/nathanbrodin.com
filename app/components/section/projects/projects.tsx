import RadialGradientCard from "../../ui/cards/RadialGradientCard";
import Heading from "../../ui/heading/Heading";
import PlantWatering from "./plantWatering/plantWatering";

export default function Projects() {
  // TODO: ADD PARALAX TO BG: https://www.youtube.com/watch?v=gxWSju6jxEA&t=174s

  return (
    <section id="projects" className="flex flex-col justify-center w-full">
      <Heading title="My projects" subtitle="Here&apos;s an overview of some of the projects I&apos;ve worked on."/>

      <PlantWatering />
      <RadialGradientCard />
    </section>
  );
}
