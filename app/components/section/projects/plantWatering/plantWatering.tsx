import Image from "next/image";
import PhoneOverlay from "./phoneOverlay";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function PlantWatering() {
  return (
    <div className="relative h-full w-full">
      <PhoneOverlay className="hover:z-10">Select</PhoneOverlay>
      <PhoneOverlay className="transform translate-x-32 translate-y-20">
        <div className="flex flex-col gap-4 w-full h-full p-8">
          <div className="bg-[#1B4139] flex-1 w-full">
            <div>
              <div>Welcome !</div>
              <div>Your watering system is on point</div>
            </div>
            <div></div>
          </div>
          <div className="bg-[#1B4139] flex-1 w-full"></div>
          <div className="bg-[#1B4139] flex-1 w-full rounded-2xl p-3 flex flex-col justify-between">
            <div className="text-white">
              <div className="text-xs">Your actually watering:</div>
              <div className="font-bold">Genus of plants</div>
            </div>
            <div className="flex justify-between items-center">
                <Image src={"/lune.png"} width={80} height={80} alt="lune" className="rounded-2xl border-[3px]"/>
                <div className="bg-white rounded-full w-[60px] h-[60px] flex justify-center content-center">
                    <ArrowRightIcon className="w-[40px]" />
                </div>
            </div>
          </div>
        </div>
      </PhoneOverlay>
    </div>
  );
}
