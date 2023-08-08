import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlantItemProps } from ".";
import Battery from "./battery";
import Sun from "./sun";
import Water from "./water";
import Moisture from "./moisture";
import Temperature from "./temperature";

interface HomePageProps {
  currentPlant: PlantItemProps;
}

export default function HomePage({ currentPlant }: HomePageProps) {
  return (
    <div className="flex flex-col gap-2 w-full h-full p-2 lg:p-4 bg-[#EEEBE5]">
      <div className=" text-[#1B4139]">
        <div className="font-bold text-xs lg:text-sm">Welcome !</div>
        <div className="text-[8px] lg:text-xs">
          Your watering system is on point
        </div>
      </div>
      <div className="flex-1 w-full flex gap-2">
        <Battery />
        <Sun />
      </div>
      <div className="flex-[1.5] w-full flex gap-2">
        <Water />
        <div className="flex-1 h-full flex flex-col gap-2">
          <Moisture />
          <Temperature />
        </div>
      </div>
      <div className="bg-[#1B4139] flex-1 w-full rounded-xl p-3 flex flex-col justify-between">
        <div className="text-white">
          <div className="text-[8px] lg:text-xs">Your actually watering:</div>
          <div className="text-xs lg:text-sm font-bold">
            {currentPlant.name}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="rounded-xl p-1 w-10 h-10 lg:w-14 lg:h-14  border-2 lg:border-[3px] overflow-hidden">
            <Image
              src={currentPlant.iconPath}
              width={60}
              height={60}
              alt={currentPlant.name}
              layout="responsive"
            />
          </div>
          <button className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <ArrowRight
              strokeWidth={2}
              className="w-4 sm:w-4 lg:w-6 text-[#1B4139]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
