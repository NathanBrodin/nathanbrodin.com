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
    <div className="mt-2 flex w-full flex-col justify-between rounded-xl bg-[#1B4139]">
      <motion.div
        className="m-2 h-5 rounded-md bg-[#EEECE5] transition-all sm:h-6 lg:h-7"
        style={{
          background: `linear-gradient(to right, #FFCC4D 0%, #FFCC4D ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="m-2 flex flex-col items-center justify-center text-white">
        <div className="text-xs font-bold lg:text-sm">
          <motion.span ref={counter.ref} />%
        </div>
        <div className="text-[8px] lg:text-xs">of battery</div>
      </div>
    </div>
  );
}
