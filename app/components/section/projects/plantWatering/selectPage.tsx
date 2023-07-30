import Image from "next/image";
import PhoneOverlay from "./phoneOverlay";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PlantItem, { PlantItemProps } from "./plantItem";

export default function SelectPage() {
  const PlantList: PlantItemProps[] = [
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
    }
  ];

  return (
    <PhoneOverlay>
      <div className="flex flex-col gap-2 w-full h-full p-4 sm:p-6">
        <div className="my-4 text-[#1B4139]">
          <div className="font-bold text-xs lg:text-sm">Need some changes ?</div>
          <div className="text-[8px] lg:text-xs">Select a plant, or create one !</div>
        </div>
        <div className="overflow-hidden">
          {PlantList.map((plant, index) => {
            return (
              <PlantItem
                iconPath={plant.iconPath}
                name={plant.name}
                values={plant.values}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </PhoneOverlay>
  );
}
