"use client";

import ProjectCard from "@/app/components/ui/cards/projectCard";
import HomePage from "./homePage";
import SelectPage from "./selectPage";
import { useState } from "react";

export interface PlantItemProps {
  iconPath: string;
  name: string;
  values: String;
}

export default function PlantWatering() {
  const [availablePlants, setAvailablePlants] = useState<PlantItemProps[]>([
    {
      iconPath: "/lune.png",
      name: "Genus of plants",
      values: "13-35° 40-60%",
    },
    {
      iconPath: "/tomatoes.png",
      name: "Tomatoes",
      values: "18-32° 10-30%",
    },
    {
      iconPath: "/salads.png",
      name: "Salads",
      values: "10-25° 40-70%",
    },
    {
      iconPath: "/basilic.png",
      name: "Basilic",
      values: "18-28° 30-50%",
    },
    {
      iconPath: "/cactus.png",
      name: "Cactus",
      values: "25-45° 40-60%",
    },
    {
      iconPath: "/cabbage.png",
      name: "Cabbage",
      values: "18-28° 30-70%",
    },
    {
      iconPath: "/lavender.png",
      name: "Lavender",
      values: "25-45° 10-60%",
    },
  ]);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between xl:justify-around xl:gap-x-40 lg:w-full">
      <div className="h-[480px] sm:h-[540px] self-center lg:self-start -translate-x-32 lg:translate-x-0 lg:h-0">
        <SelectPage
          plantList={availablePlants}
          setCurrentPlant={setAvailablePlants}
          className=""
        />
        <HomePage
          currentPlant={availablePlants[0]}
          className="transform translate-x-24 translate-y-16 xl:translate-x-32 xl:translate-y-20"
        />
      </div>
      <ProjectCard
        year="2023"
        projectType="School project"
        projectName="Smart Plant Watering System"
        description="I developed a smart plant watering system,
      featuring a hardware setup with automatic watering, moisture, temperature, and light
      sensors, paired with a mobile application for remote plant status
      monitoring.
      This system presents a practical and efficient solution
      for plant care management by offering real-time updates on plant
      conditions.
      The intuitive and aesthetically pleasing UI, crafted by me, elevates the user experience."
        repoLink="https://gitlab.esiea.fr/brodin/arrosage-eco"
        stack={["Flutter", "STM32", "Arduino"]}
      />
    </div>
  );
}
