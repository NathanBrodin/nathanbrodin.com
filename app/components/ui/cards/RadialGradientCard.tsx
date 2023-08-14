"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactElement } from "react";

interface Props {
  children?: ReactElement;
}

export default function RadialGradientCard({ children }: Props) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative min-w-md max-w-xl h-fit rounded-xl border border-white/10 bg-white/60 px-6 md:px-8 py-16 shadow-lg ring-1 ring-gray-900/5"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgb(110, 154, 175, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
