import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type SkillsCardProps = {
  name: string;
  icon?: string;
  delay?: number;
};

export default function SkillsCard({ name, icon, delay }: SkillsCardProps) {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // at least 10% of the element is visible
  });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{
        delay: delay,
      }}
      className="flex items-center rounded-xl border border-white/10 bg-white/80 px-4 py-2 shadow-lg ring-1 ring-gray-900/5 transition-all hover:translate-y-2"
    >
      {icon}
      <p className="font-medium">{name}</p>
    </motion.div>
  );
}
