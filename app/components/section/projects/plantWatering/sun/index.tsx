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
    <div className="bg-white w-5/12 rounded-xl mt-2 flex flex-col justify-around items-center">
      <motion.div
        className="bg-[#EEECE5] h-7 w-7 mt-2 rounded-full"
        style={{
          background: `radial-gradient(circle at center, #FFCC4D 0%, #FFCC4D ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
        }}
      ></motion.div>
      <div className="text-[#1B4139] flex flex-col justify-center items-center">
        <div className="font-bold text-xs lg:text-sm">
          <motion.span ref={counter.ref} />%
        </div>
        <div className="text-[8px] lg:text-xs">of sun</div>
      </div>
    </div>
  );
}
