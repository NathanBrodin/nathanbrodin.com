import { useEffect, useState } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

export default function Counter({ from, to, duration }: CounterProps) {
  const [value, setValue] = useState<number>(from);
  const [increasing, setIncreasing] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const updateCounter = () => {
      if (increasing) {
        if (value < to) {
          setValue((prevValue) => prevValue + 1);
        } else {
          setIncreasing(false);
        }
      } else {
        if (value > from) {
          setValue((prevValue) => prevValue - 1);
        } else {
          setIncreasing(true);
        }
      }
    };

    intervalId = setInterval(updateCounter, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [value, from, to, duration, increasing]);

  return { value };
}
