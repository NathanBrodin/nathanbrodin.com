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
    <section id="projects" className="flex flex-col justify-center items-center w-full max-w-7xl">
      <Heading
        title="My projects"
        subtitle="Here's an overview of some of the projects I've worked on."
      />
      <div className="grid grid-flow-dense lg:grid-cols-2 gap-8 ">
        <PlantWatering />
        <GrammarChecker />
        <ChatAdminPanel />
        <MyPasswordManager />
        <Sokoban />
        <Portfolio />
        <ESIEABOT />
      </div>
    </section>
  );
}
