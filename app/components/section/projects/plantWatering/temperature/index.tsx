import { useEffect, useState } from "react";
import Counter from "../counter";
import { motion } from "framer-motion";

export default function Temperature() {
  const [from, setFrom] = useState(-4);
  const [to, setTo] = useState(35);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 35));
    }, 25000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  const counter = Counter({ from, to, duration: 12 });

  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-[#FBB242] text-white">
      <div className="text-xs font-bold lg:text-sm">
        <motion.span ref={counter.ref} />°
      </div>
      <div className="text-[8px] lg:text-xs">of temperature</div>
    </div>
  );
}
