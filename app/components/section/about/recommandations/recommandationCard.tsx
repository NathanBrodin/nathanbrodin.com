import { User2 } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

type RecommandationCardProps = {
  name: string;
  role: string;
  content: string;
  delay?: number;
};

export default function RecommandationCard({
  name,
  role,
  content,
  delay = 0,
}: RecommandationCardProps) {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1 // at least 10% of the element is visible
  });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{
        delay: delay,
      }}
      className="flex max-w-md flex-col gap-8 rounded-xl border border-white/10 bg-white/80 p-8 shadow-lg ring-1 ring-gray-900/5"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-end justify-center overflow-hidden rounded-full bg-gray-300">
          <User2 className="h-8 w-8 text-gray-500" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="font-light text-gray-500">{role}</div>
        </div>
      </div>
      <div>{content}</div>
    </motion.div>
  );
}
