import { useEffect, useState } from "react";
import Counter from "../counter";
import { motion } from "framer-motion";

export default function Moisture() {
  const [from, setFrom] = useState(10);
  const [to, setTo] = useState(80);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrom(to);
      setTo(Math.floor(Math.random() * 80));
    }, 13000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  const counter = Counter({ from, to, duration: 17 });

  return (
    <div className="bg-[#FBB242] flex-1 rounded-xl text-white flex flex-col justify-center items-center">
      <div className="font-bold text-xs lg:text-sm">
        <motion.span ref={counter.ref} />%
      </div>
      <div className="text-[8px] lg:text-xs">of moisture</div>
    </div>
  );
}
