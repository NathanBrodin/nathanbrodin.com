import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration: number
}

export default function Counter({ from, to, duration }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        const roundedValue = Math.round(value);
        node.textContent = roundedValue.toString();
        setCurrentValue(roundedValue);
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return { ref: nodeRef, value: currentValue };
}
