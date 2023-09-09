import { useEffect, useState } from "react";
import Counter from "../counter";
import { motion } from "framer-motion";

export default function Water() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 100));
    }, 24000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  const counter = Counter({ from, to, duration: 24 });

  return (
    <div className="flex h-full flex-1 justify-between rounded-xl bg-white">
      <motion.div
        className="m-2 w-5 rounded-md bg-[#EEECE5] sm:w-6 lg:w-7"
        style={{
          background: `linear-gradient(to top, #A3D9D2 0%, #A3D9D2 ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="mr-2 flex flex-col items-center justify-center text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">
          <motion.span ref={counter.ref} />%
        </div>
        <div className="text-[8px] lg:text-xs">of water</div>
      </div>
    </div>
  );
}
