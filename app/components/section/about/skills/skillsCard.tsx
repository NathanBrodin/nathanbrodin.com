import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export type SkillsCardProps = {
  name: string;
  icon?: ReactNode;
  delay?: number;
  inView?: boolean;
};

export default function SkillsCard({ name, icon, delay, inView }: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{
        delay: delay,
      }}
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/80 px-4 py-2 shadow-lg ring-1 ring-gray-900/5 transition-all"
    >
      {icon}
      <p className="font-medium">{name}</p>
    </motion.div>
  );
}
