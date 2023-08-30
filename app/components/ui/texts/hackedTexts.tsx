import React, { useEffect, useState, ReactElement } from "react";
import HackedText from "./hackedText";

interface HackedTextsProps {
  children: ReactElement[];
}

export default function HackedTexts({ children }: HackedTextsProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = children.map((child) => child.props.children);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isAnimating) {
      timeoutId = setTimeout(() => {
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [texts.length, currentTextIndex, isAnimating]);

  return (
    <HackedText key={currentTextIndex} setIsAnimating={setIsAnimating}>
      {texts[currentTextIndex]}
    </HackedText>
  );
}
