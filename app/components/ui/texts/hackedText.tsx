"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface HackedTextProps {
  children: string,
  setIsAnimating: Dispatch<SetStateAction<boolean>>
}

export default function HackedText({ children, setIsAnimating }: HackedTextProps) {
  const [text, setText] = useState<string>(children);
  const letters = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    setIsAnimating(true);

    function textAnimation() {
      let iteration = 0;

      const interval = setInterval(() => {
        let tmp = text
          .split("")
          .map((letter, index) => {
            if (index < iteration || letter === " ") {
              return letter;
            } else {
              return letters[Math.floor(Math.random() * letters.length)];
            }
          })
          .join("");

        if (iteration >= text.length) {
            clearInterval(interval)
            setIsAnimating(false);
        };
        setText(tmp);
        iteration += 1 / 3;
      }, 30);

    }
    textAnimation();
  }, []);

  return (
    <span
      className="font-bold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      style={{ fontFamily: "monospace" }}
    >
      {text}
    </span>
  );
}
