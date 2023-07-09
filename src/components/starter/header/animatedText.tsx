/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { motion } from "framer-motion";

interface MotionProps {
  value: boolean;
}

const Motion = ({ value }: MotionProps) => {
  const nameVariants = {
    hidden: { opacity: 0, x: -30, },
    visible: { opacity: 1, x:0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate={value ? "visible" : "hidden"}
      variants={nameVariants}
      className="text-white font-[900] text-2xl"
    >
      Nathan Brodin
    </motion.div>
  );
};

export const QwickAnimatedText = qwikify$(Motion);
