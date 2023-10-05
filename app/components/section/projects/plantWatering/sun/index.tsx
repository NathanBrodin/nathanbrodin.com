import { motion } from "framer-motion";
import { ElementProps } from "../homePage";

export default function Sun({ value }: ElementProps) {
  return (
    <div className="mt-2 flex w-5/12 flex-col items-center justify-around rounded-xl bg-white">
      <motion.div
        className="mt-2 h-7 w-7 rounded-full bg-[#EEECE5]"
        style={{
          background: `radial-gradient(circle at center, #FFCC4D 0%, #FFCC4D ${value}%, #EEECE5 ${value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="flex flex-col items-center justify-center text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">{value}%</div>
        <div className="text-[8px] lg:text-xs">of sun</div>
      </div>
    </div>
  );
}
