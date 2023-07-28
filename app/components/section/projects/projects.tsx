import PlantWatering from "./plantWatering/plantWatering";

export default function Projects() {
  // TODO: ADD PARALAX TO BG: https://www.youtube.com/watch?v=gxWSju6jxEA&t=174s

    return (
      <section id="projects" className="flex flex-col justify-center w-full min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-black text-transparent bg-gradient-to-t from-secondary to-primary bg-clip-text">My projects</h1>
          <h2 className="text-xl font-bold">Here&apos;s an overview of some of the projects I&apos;ve worked on.</h2>
        </div>
        <PlantWatering />
      </section>
    )
  }