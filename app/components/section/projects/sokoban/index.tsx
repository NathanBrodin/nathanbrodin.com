"use client"

import ProjectCard from "@/app/components/ui/cards/projectCard";
import GamePlay from "./gamePlay";
import { useInView } from 'react-intersection-observer';
import IphoneSvg from "@/app/components/ui/frame/iphone/iphoneSvg";

export default function Sokoban() {
  const [inViewRef, inView] = useInView();

  return (
    <ProjectCard
      year="2023"
      projectType="School project"
      projectName="Sokoban"
      description={`For my final project in the Flutter course, I took on the challenge of creating the Sokoban game. 
      Developed in just 20 hours, this version boasts engaging player animations and a rich sound design. 
      I also incorporated an achievement-based system to reward players for their progress and skillful gameplay.`}
      stack={["Flutter", "Dart"]}
      repoLink="https://gitlab.esiea.fr/brodin/sokoban"
    >
      <div ref={inViewRef}>
        {inView && <GamePlay />}
      </div>
    </ProjectCard>
  );
}
