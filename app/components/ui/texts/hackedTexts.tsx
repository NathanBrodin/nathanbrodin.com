"use client";

import { useEffect, useState } from "react";
import HackedText from "./hackedText";

interface hackedTextsProps {
  children: string[];
}

export default function HackedTexts({ children }: hackedTextsProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isAnimating && currentTextIndex < children.length - 1) {
      timeoutId = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
      }, 1000); // delay of 1 second
    }

    return () => clearTimeout(timeoutId); // clear the timeout if the component is unmounted
  }, [children.length, currentTextIndex, isAnimating]);

  return (
    <HackedText key={currentTextIndex} setIsAnimating={setIsAnimating}>
      {children[currentTextIndex]}
    </HackedText>
  );
}
