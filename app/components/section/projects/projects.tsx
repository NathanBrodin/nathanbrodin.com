import ProjectCard from "../../ui/cards/projectCard";
import Heading from "../../ui/heading/Heading";
import ESIEABOT from "./ESIEABOT";
import ChatAdminPanel from "./chatAdminPanel";
import GrammarChecker from "./grammarChecker";
import MyPasswordManager from "./myPasswordManager";
import PlantWatering from "./plantWatering";
import Portfolio from "./portfolio";
import Sokoban from "./sokoban";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex w-full max-w-7xl flex-col items-center justify-center"
    >
      <Heading
        title="My projects"
        subtitle="Here's an overview of some of the projects I've worked on."
      />
      <div className="grid grid-flow-dense gap-8 lg:grid-cols-2 ">
        <PlantWatering />
        <GrammarChecker />
        <ChatAdminPanel />
        <MyPasswordManager />
        <Sokoban />
        <Portfolio />
        <ESIEABOT />
        <ProjectCard
          year="2023"
          projectType="School project"
          projectName="B-moveon"
          description="Accomplished streamlined delivery logistics mobile app for a Spanish company, optimizing routes
for delivery personnel, deployed on both Play Store and Apple Store.
Led end-to-end development, from design and testing to deployment, of a Flutter mobile app."
          stack={["Flutter", "Dart"]}
          repoLink="https://gitlab.esiea.fr/creuze/Cargo-BikePST"
        />
      </div>
    </section>
  );
}
