import { useEffect, useState } from "react";
import Counter from "../counter";
import { motion } from "framer-motion";

export default function Sun() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 100));
    }, 12000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  const counter = Counter({ from, to, duration: 15 });
  return (
    <div className="mt-2 flex w-5/12 flex-col items-center justify-around rounded-xl bg-white">
      <motion.div
        className="mt-2 h-7 w-7 rounded-full bg-[#EEECE5]"
        style={{
          background: `radial-gradient(circle at center, #FFCC4D 0%, #FFCC4D ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="flex flex-col items-center justify-center text-[#1B4139]">
        <div className="text-xs font-bold lg:text-sm">
          <motion.span ref={counter.ref} />%
        </div>
        <div className="text-[8px] lg:text-xs">of sun</div>
      </div>
    </div>
  );
}
