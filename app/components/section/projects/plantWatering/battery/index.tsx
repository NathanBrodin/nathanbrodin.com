import { useEffect, useState } from "react";
import Counter from "../counter";
import { motion } from "framer-motion";

export default function Battery() {
  const [from, setFrom] = useState(100);
  const [to, setTo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 100));
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  const counter = Counter({ from, to, duration: 20 });

  return (
    <div className="bg-[#1B4139] w-full rounded-xl flex flex-col justify-between mt-2">
      <motion.div
        className="bg-[#EEECE5] rounded-md h-5 sm:h-6 lg:h-7 m-2 transition-all"
        style={{
          background: `linear-gradient(to right, #FFCC4D 0%, #FFCC4D ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="text-white flex flex-col justify-center items-center m-2">
        <div className="font-bold text-xs lg:text-sm">
          <motion.span ref={counter.ref} />%
        </div>
        <div className="text-[8px] lg:text-xs">of battery</div>
      </div>
    </div>
  );
}
