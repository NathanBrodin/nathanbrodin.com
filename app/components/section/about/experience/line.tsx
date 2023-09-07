import React from "react";

type LineProps = {
  className?: string;
};

export default function Line({ className }: LineProps) {
  return (
    <div
      className={`absolute ${className}  h-full w-[2px] from-gray-100`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, transparent, 50%, #a3a3a3 50%, #a3a3a3 100%)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "2px 8px",
      }}
    ></div>
  );
}
