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
    <div className="flex h-full w-full flex-col gap-2 bg-[#EEEBE5] p-2 lg:p-4">
      <div className=" text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">Welcome !</div>
        <div className="text-[8px] lg:text-xs">
          Your watering system is on point
        </div>
      </div>
      <div className="flex w-full flex-1 gap-2">
        <Battery />
        <Sun />
      </div>
      <div className="flex w-full flex-[1.5] gap-2">
        <Water />
        <div className="flex h-full flex-1 flex-col gap-2">
          <Moisture />
          <Temperature />
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col justify-between rounded-xl bg-[#1B4139] p-3">
        <div className="text-white">
          <div className="text-[8px] lg:text-xs">Your actually watering:</div>
          <div className="text-xs font-bold lg:text-sm">
            {currentPlant.name}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 overflow-hidden rounded-xl border-2 p-1  lg:h-14 lg:w-14 lg:border-[3px]">
            <Image
              src={currentPlant.iconPath}
              width={60}
              height={60}
              alt={currentPlant.name}
              layout="responsive"
            />
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <ArrowRight
              strokeWidth={2}
              className="w-4 text-[#1B4139] sm:w-4 lg:w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
