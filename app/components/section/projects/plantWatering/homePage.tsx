import Image from "next/image";
import PhoneOverlay from "./phoneOverlay";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface HomePageProps {
  className?: string
}

export default function HomePage({className}: HomePageProps) {
  const moisture = 0;
  const temperature = 0;
  const water = 40;
  const sun = 20;
  const battery = 40;

  const waterStyle = {
    background: `linear-gradient(to top, #A3D9D2 0%, #A3D9D2 ${water}%, #EEECE5 ${water}%, #EEECE5 100%)`,
  };

  const batteryStyle = {
    background: `linear-gradient(to right, #FFCC4D 0%, #FFCC4D ${battery}%, #EEECE5 ${battery}%, #EEECE5 100%)`,
  };

  const sunStyle = {
    background: `radial-gradient(circle at center, #FFCC4D 0%, #FFCC4D ${sun}%, #EEECE5 ${sun}%, #EEECE5 100%)`,
  };

  return (
    <PhoneOverlay className={`${className}`}>
      <div className="flex flex-col gap-2 w-full h-full p-4 sm:p-6">
        <div className="mt-4 text-[#1B4139]">
          <div className="font-bold text-xs lg:text-sm">Welcome !</div>
          <div className="text-[8px] lg:text-xs">Your watering system is on point</div>
        </div>
        <div className="flex-1 w-full flex gap-2">
          <div className="bg-[#1B4139] w-full rounded-xl flex flex-col justify-between mt-2">
            <div
              className="bg-[#EEECE5] rounded-md h-5 sm:h-6 lg:h-7 m-2"
              style={batteryStyle}
            ></div>
            <div className="text-white flex flex-col justify-center items-center m-2">
              <div className="font-bold text-xs lg:text-sm">{battery}%</div>
              <div className="text-[8px] lg:text-xs">of battery</div>
            </div>
          </div>
          <div className="bg-white w-5/12 rounded-xl mt-2 flex flex-col justify-around items-center">
            <div
              className="bg-[#EEECE5] h-7 w-7 mt-2 rounded-full"
              style={sunStyle}
            ></div>
            <div className="text-[#1B4139] flex flex-col justify-center items-center">
              <div className="font-bold text-xs lg:text-sm">{sun}%</div>
              <div className="text-[8px] lg:text-xs">of sun</div>
            </div>
          </div>
        </div>
        <div className="flex-[1.5] w-full flex gap-2">
          <div className="bg-white flex-1 h-full rounded-xl flex justify-between">
            <div
              className="bg-[#EEECE5] rounded-md w-5 sm:w-6 lg:w-7 m-2"
              style={waterStyle}
            ></div>
            <div className="text-[#1B4139] flex flex-col justify-center items-center mr-2">
              <div className="font-bold text-xs lg:text-sm">{water}%</div>
              <div className="text-[8px] lg:text-xs">of water</div>
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col gap-2">
            <div className="bg-[#FBB242] flex-1 rounded-xl text-white flex flex-col justify-center items-center">
              <div className="font-bold text-xs lg:text-sm">{moisture}%</div>
              <div className="text-[8px] lg:text-xs">of moisture</div>
            </div>
            <div className="bg-[#FBB242] flex-1 rounded-xl text-white flex flex-col justify-center items-center">
              <div className="font-bold text-xs lg:text-sm">{temperature}°</div>
              <div className="text-[8px] lg:text-xs">of temperature</div>
            </div>
          </div>
        </div>
        <div className="bg-[#1B4139] flex-1 w-full rounded-xl p-3 flex flex-col justify-between">
          <div className="text-white">
            <div className="text-[8px] lg:text-xs">Your actually watering:</div>
            <div className="text-xs lg:text-sm font-bold">Genus of plants</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="rounded-xl p-1 w-10 h-10 lg:w-14 lg:h-14  border-2 lg:border-[3px]">
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
  );
}
