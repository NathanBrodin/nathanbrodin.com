import { motion } from "framer-motion";
import { ElementProps } from "../homePage";

export default function Battery({value}: ElementProps) {
  return (
    <div className="mt-2 flex w-full flex-col justify-between rounded-xl bg-[#1B4139]">
      <motion.div
        className="m-2 h-5 rounded-md bg-[#EEECE5] transition-all sm:h-6 lg:h-7"
        style={{
          background: `linear-gradient(to right, #FFCC4D 0%, #FFCC4D ${value}%, #EEECE5 ${value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="m-2 flex flex-col items-center justify-center text-white">
        <div className="text-xs font-bold lg:text-sm">
          {value}%
        </div>
        <div className="text-[8px] lg:text-xs">of battery</div>
      </div>
    </div>
  );
}
