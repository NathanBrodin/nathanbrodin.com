import ProjectCard from "@/app/components/ui/cards/projectCard";
import HomePage from "./homePage";
import SelectPage from "./selectPage";

export default function PlantWatering() {
  return (
    <div className="flex justify-between flex-col sm:flex-row lg:px-40 h-[870px] sm:h-[530px] lg:h-[600px]">
      <div className="w-1/2 self-center sm:self-auto sm:translate-x-12 sm:translate-y-10 lg:translate-x-32 lg:justify-self-end lg:translate-y-10">
        <SelectPage className="transform -translate-x-12 -translate-y-8 md:-translate-x-16 md:-translate-y-10" />
        <HomePage className="transform translate-x-12 translate-y-8 md:translate-x-16 md:translate-y-10" />
      </div>
      <ProjectCard
        year="2023"
        projectType="School"
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
