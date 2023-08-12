import { ReactNode } from "react";
import Image from "next/image";
import Frame from "./iPhoneFrame.svg"

interface IphoneFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function IphoneFrame({ children, className }: IphoneFrameProps) {
  return (
    <div className={`relative ${className} w-48 lg:w-64 z-0`}>
      <Image
        src={Frame}
        width={447}
        height={906}
        layout="responsive"
        alt="Iphone"
        className="max-w-full h-auto pointer-events-none"
      />
      <div className="shadow-xl shadow-black absolute rounded-3xl inset-y-3 left-3 right-3 overflow-hidden bg-[#EEEBE5]  pt-5 lg:pt-8 -z-10">
        <div className="w-full h-full">
        {children}
        </div>
      </div>
    </div>
  );
}
