import dynamic from "next/dynamic";
import ProjectCard from "../../ui/cards/projectCard";
import Heading from "../../ui/heading/Heading";
import ESIEABOT from "./ESIEABOT";
import ChatAdminPanel from "./chatAdminPanel";
import GrammarChecker from "./grammarChecker";
import MyPasswordManager from "./myPasswordManager";
import Portfolio from "./portfolio";
import Sokoban from "./sokoban";
import BmoveOn from "./b-moveon";

const DynamicPlantWatering = dynamic(() => import("./plantWatering"), {
  loading: () => <p>Loading...</p>,
});

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
        <DynamicPlantWatering />
        <GrammarChecker />
        <ChatAdminPanel />
        <ProjectCard
          year="2023"
          projectType="Personal project"
          projectName="Google Maps API"
          description={`While working on the B-moveon project, I had to use the Google Maps API to get places information. 
          Due to the lack of integration of the Google Maps API in Flutter, I develop my own package to allow other developers to integrate the Google Maps API into their Flutter project.`}
          stack={["Flutter", "Dart", "Google Maps API"]}
          repoLink="https://github.com/NathanBrodin/google_maps_api_flutter"
        />
        <BmoveOn />
        <Sokoban />
        <Portfolio />
        <ESIEABOT />
        <MyPasswordManager />
      </div>
    </section>
  );
}
