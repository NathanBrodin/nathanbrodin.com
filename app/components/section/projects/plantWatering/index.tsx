"use client";

import ProjectCard from "@/app/components/ui/cards/projectCard";
import HomePage from "./homePage";
import SelectPage from "./selectPage";
import { useState } from "react";
import IphoneFrame from "@/app/components/ui/frame/iphone";

export interface PlantItemProps {
  iconPath: string;
  name: string;
  values: String;
}

export default function PlantWatering() {
  const [availablePlants, setAvailablePlants] = useState<PlantItemProps[]>([
    {
      iconPath: "/plantWatering/lune.png",
      name: "Genus of plants",
      values: "13-35° 40-60%",
    },
    {
      iconPath: "/plantWatering/tomatoes.png",
      name: "Tomatoes",
      values: "18-32° 10-30%",
    },
    {
      iconPath: "/plantWatering/salads.png",
      name: "Salads",
      values: "10-25° 40-70%",
    },
    {
      iconPath: "/plantWatering/basilic.png",
      name: "Basilic",
      values: "18-28° 30-50%",
    },
    {
      iconPath: "/plantWatering/cactus.png",
      name: "Cactus",
      values: "25-45° 40-60%",
    },
    {
      iconPath: "/plantWatering/cabbage.png",
      name: "Cabbage",
      values: "18-28° 30-70%",
    },
    {
      iconPath: "/plantWatering/lavender.png",
      name: "Lavender",
      values: "25-45° 10-60%",
    },
  ]);

  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-5">
      <div className="relative w-72 lg:w-96 h-[452px] lg:h-[598px] grid">
        <div>
          <IphoneFrame className=" hover:z-10 z-0">
            <SelectPage
              plantList={availablePlants}
              setCurrentPlant={setAvailablePlants}
            />
          </IphoneFrame>
        </div>
        <div className="absolute transform translate-x-24 translate-y-16 xl:translate-x-32 xl:translate-y-20 ">
          <IphoneFrame className=" hover:z-10 z-0">
            <HomePage currentPlant={availablePlants[0]} />
          </IphoneFrame>
        </div>
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
