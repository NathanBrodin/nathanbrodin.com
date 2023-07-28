import Image from "next/image";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode,
    className?: string
  }

export default function PhoneOverlay({children, className}: Props) {
    return (
        <div className={`absolute bg-[#EEEBE5] rounded-[5rem] hover:z-10 ${className} transition-all duration-500`}>
        <div className="flex flex-col relative items-center justify-center h-full overflow-hidden">
          <div className="absolute w-full h-full">{children}</div>
          <Image
            src="/phoneOverlay.png"
            className="relative h-full bg-cover"
            width={280}
            height={0}
            alt="Home"
          />
        </div>
      </div>
    )
}