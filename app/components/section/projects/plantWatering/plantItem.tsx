import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlantItemProps } from ".";
import { MouseEventHandler } from "react";

export interface Props {
  plant: PlantItemProps;
  handlePlantSelect: MouseEventHandler<HTMLButtonElement>;
}

export default function PlantItem({ plant, handlePlantSelect }: Props) {
  return (
    <div className="mb-2 flex items-center justify-between rounded-xl bg-[#1B4139] p-2 first:bg-[#FBB242] ">
      <div className="flex h-10 w-10 items-center justify-center  overflow-hidden rounded-xl border-2 lg:h-14 lg:w-14 lg:border-[3px]">
        <Image
          src={plant.iconPath}
          width={60}
          height={60}
          alt="lune"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col text-[8px] text-white lg:text-xs">
        <div className="font-bold">{plant.name}</div>
        <div>{plant.values}</div>
      </div>
      <button
        onClick={handlePlantSelect}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
      >
        <ArrowRight
          strokeWidth={2}
          className="w-4 text-[#1B4139] sm:w-4 lg:w-6"
        />
      </button>
    </div>
  );
}
