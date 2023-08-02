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
        <div className="bg-white flex-1 h-full rounded-xl flex justify-between">
            <motion.div
              className="bg-[#EEECE5] rounded-md w-5 sm:w-6 lg:w-7 m-2"
              style={{
                background: `linear-gradient(to top, #A3D9D2 0%, #A3D9D2 ${counter.value}%, #EEECE5 ${counter.value}%, #EEECE5 100%)`,
              }}
            ></motion.div>
            <div className="text-[#1B4139] flex flex-col justify-center items-center mr-2">
              <div className="font-bold text-xs lg:text-sm"><motion.span ref={counter.ref} />%</div>
              <div className="text-[8px] lg:text-xs">of water</div>
            </div>
          </div>
    )
}