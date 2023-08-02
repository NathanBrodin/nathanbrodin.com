import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlantItemProps } from ".";
import { MouseEventHandler } from "react";

export interface Props {
  plant: PlantItemProps,
  handlePlantSelect: MouseEventHandler<HTMLButtonElement>
}

export default function PlantItem({ plant, handlePlantSelect }: Props) {
  return (
    <div className="rounded-xl bg-[#1B4139] flex justify-between items-center p-2 mb-2 first:bg-[#FBB242] ">
      <div className="rounded-xl w-10 h-10 lg:w-14 lg:h-14  border-2 lg:border-[3px] overflow-hidden flex justify-center items-center">
        <Image
          src={plant.iconPath}
          width={60}
          height={60}
          alt="lune"
          layout="responsive"
        />
      </div>
      <div className="text-[8px] lg:text-xs flex flex-col text-white">
        <div className="font-bold">{plant.name}</div>
        <div>{plant.values}</div>
      </div>
      <button onClick={handlePlantSelect} className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
        <ArrowRight
          strokeWidth={2}
          className="w-4 sm:w-4 lg:w-6 text-[#1B4139]"
        />
      </button>
    </div>
  );
}
