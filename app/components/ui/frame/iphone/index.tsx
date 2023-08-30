import { ReactNode } from "react";
import Image from "next/image";
import Frame from "./iPhoneFrame.svg";

interface IphoneFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function IphoneFrame({ children, className }: IphoneFrameProps) {
  return (
    <div className={`relative ${className} z-0 w-48 lg:w-64`}>
      <Image
        src={Frame}
        width={447}
        height={906}
        layout="responsive"
        alt="Iphone"
        className="pointer-events-none h-auto max-w-full"
      />
      <div className="absolute inset-y-3 left-3 right-3 -z-10 overflow-hidden rounded-3xl bg-[#EEEBE5] pt-5  shadow-xl shadow-black lg:pt-8">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
