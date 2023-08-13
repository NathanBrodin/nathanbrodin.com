import ProjectCard from "@/app/components/ui/cards/projectCard";
import GamePlay from "./gamePlay";

export default function Sokoban() {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-5 relative">
      <ProjectCard
        year="2023"
        projectType="School project"
        projectName="Sokoban"
        description="I made in one week the Sokoban game as a mobile app"
        stack={["Flutter", "Dart"]}
        repoLink="https://gitlab.esiea.fr/brodin/sokoban"
      />
      <GamePlay/>
    </div>
  );
}
