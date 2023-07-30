import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface PlantItemProps {
  iconPath: string,
  name: string,
  values: String
}

export default function PlantItem({iconPath, name, values}: PlantItemProps) {
    return (
        <div className="rounded-xl bg-[#1B4139] flex justify-between items-center p-2 mb-2 first:bg-[#FBB242] ">
            <div className="rounded-xl w-10 h-10 lg:w-14 lg:h-14  border-2 lg:border-[3px] overflow-hidden flex justify-center items-center">
              <Image
                src={iconPath}
                width={60}
                height={60}
                alt="lune"
                layout="responsive"
              />
            </div>
            <div className="text-[8px] lg:text-xs flex flex-col text-white">
              <div className="font-bold">{name}</div>
              <div>{values}</div>
            </div>
            <div className="bg-white rounded-full w-8 h-8 flex justify-center content-center">
              <ArrowRightIcon className="w-4 sm:w-4 lg:w-4" />
            </div>
          </div>
    )
}