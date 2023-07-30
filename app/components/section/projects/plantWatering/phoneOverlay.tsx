import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function PhoneOverlay({ children, className }: Props) {
  return (
    <div
      className={`absolute bg-[#E1DDD4] rounded-[3.5rem] sm:rounded-[4rem] hover:z-10 ${className} transition-all duration-500 shadow-2xl shadow-black `}
    >
      <div className="flex flex-col relative items-center justify-center h-full overflow-hidden">
        <div className="absolute w-full h-full">{children}</div>
        <div className="w-48 sm:w-56 md:w-56 lg:w-56 xl:w-64 ">
          <Image
            src="/phoneOverlay.png"
            width={1748}
            height={3532}
            layout="responsive"
            alt="Home"
          />
        </div>
      </div>
    </div>
  );
}
