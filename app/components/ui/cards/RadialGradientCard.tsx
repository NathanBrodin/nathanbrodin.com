"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Layers, Github, Star, GitFork } from "lucide-react";

export default function RadialGradientCard() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-xl rounded-xl border border-white/10 bg-white px-8 py-16 shadow-lg ring-1 ring-gray-900/5"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(49, 76, 89, 0.20),
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <h3 className="text-base font-semibold leading-7 text-primary">
          2021 | Personal project
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-black">
            Grammar Checker
          </span>
        </div>
        <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
          I developed a grammar correction tool using the GPT-3 API, inspired by
          Quillbot&apos;s UI. Built with Next.js and TailwindCSS, my application
          is fully responsive, features light/dark modes, and puts a personal
          twist on the traditional design, demonstrating my front-end
          engineering and AI integration skills.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <div className="flex gap-2 items-center mb-4">
              <Layers className="text-secondary" />
              <h3 className="text-base font-semibold leading-7 text-primary">
                Teck stack
              </h3>
            </div>
            <div>
              <div className="flex gap-2 items-center hover:translate-x-2 transition-all">
                <div className="w-0.5 h-4 bg-primary rounded-sm"></div>
                <div className="font-medium">Next.js</div>
              </div>
              <div className="flex gap-2 items-center hover:translate-x-2 transition-all">
                <div className="w-0.5 h-4 bg-primary rounded-sm"></div>
                <div className="font-medium">Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex gap-2 items-center mb-4">
              <Github className="text-secondary" />
              <h3 className="text-base font-semibold leading-7 text-primary">
                Infos
              </h3>
            </div>
            <div>
              <div className="flex gap-2 items-center hover:translate-x-2 transition-all">
                <Star className="text-[#e3b34f] w-5 fill-[#e3b34f]"/>
                <div className="font-medium">8 Stars</div>
              </div>
              <div className="flex gap-2 items-center hover:translate-x-2 transition-all">
                <GitFork className="text-gray-500 w-5"/>
                <div className="font-medium">1 fork</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
