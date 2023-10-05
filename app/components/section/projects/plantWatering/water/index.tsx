import { motion } from "framer-motion";
import { ElementProps } from "../homePage";

export default function Water({ value }: ElementProps) {
  return (
    <div className="flex h-full flex-1 justify-between rounded-xl bg-white">
      <motion.div
        className="m-2 w-5 rounded-md bg-[#EEECE5] sm:w-6 lg:w-7"
        style={{
          background: `linear-gradient(to top, #A3D9D2 0%, #A3D9D2 ${value}%, #EEECE5 ${value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="mr-2 flex flex-col items-center justify-center text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">
          {value}%
        </div>
        <div className="text-[8px] lg:text-xs">of water</div>
      </div>
    </div>
  );
}
