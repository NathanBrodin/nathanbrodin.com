import PlantWatering from "./plantWatering/plantWatering";

export default function Projects() {
  // TODO: ADD PARALAX TO BG: https://www.youtube.com/watch?v=gxWSju6jxEA&t=174s

  return (
    <section id="projects" className="flex flex-col justify-center w-full">
      <div className="flex flex-col items-center mt-8 mb-32 px-8 sm:px-0 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-t from-secondary to-primary bg-clip-text">
          My projects
        </h1>
        <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-slate-600">
          Here&apos;s an overview of some of the projects I&apos;ve worked on.
        </h2>
      </div>
      <PlantWatering />
    </section>
  );
}
