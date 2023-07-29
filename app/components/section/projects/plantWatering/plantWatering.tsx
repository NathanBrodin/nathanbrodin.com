import Image from "next/image";
import PhoneOverlay from "./phoneOverlay";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function PlantWatering() {
  return (
    <div className="relative h-full w-full">
      <PhoneOverlay className="hover:z-10">Select</PhoneOverlay>
      <PhoneOverlay className="transform translate-x-24 translate-y-16 md:translate-x-32 md:translate-y-20">
        <div className="flex flex-col gap-2 w-full h-full p-4 sm:p-6">
          <div className="mt-4">
            <div className="font-bold text-xs">Welcome !</div>
            <div className="text-[8px]">Your watering system is on point</div>
          </div>
          <div className="flex-1 w-full flex gap-2">
            <div className="bg-[#1B4139] w-full rounded-xl"></div>
            <div className="bg-white w-5/12 h-full rounded-xl "></div>
          </div>
          <div className="flex-1 w-full flex gap-2">
            <div className="bg-white flex-1 h-full rounded-xl "></div>
            <div className="flex-1 h-full flex flex-col gap-2">
              <div className="bg-[#FBB242] flex-1 rounded-xl "></div>
              <div className="bg-[#FBB242] flex-1 rounded-xl "></div>
            </div>
          </div>
          <div className="bg-[#1B4139] flex-1 w-full rounded-xl p-3 flex flex-col justify-between">
            <div className="text-white">
              <div className="text-[8px]">Your actually watering:</div>
              <div className="text-xs font-bold">Genus of plants</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="rounded-2xl w-14 p-1 h-14  border-[3px]">
                <Image
                  src={"/lune.png"}
                  width={60}
                  height={60}
                  alt="lune"
                  layout="responsive"
                />
              </div>
              <div className="bg-white rounded-full w-8 h-8 flex justify-center content-center">
                <ArrowRightIcon className="w-4 sm:w-4 lg:w-4" />
              </div>
            </div>
          </div>
        </div>
      </PhoneOverlay>
    </div>
  );
}
