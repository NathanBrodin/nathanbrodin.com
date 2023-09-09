import { ReactNode } from "react";
import Image from "next/legacy/image";
import Frame from "./iPhoneFrame.svg";
import IphoneSvg from "./iphoneSvg";

interface IphoneFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function IphoneFrame({ children, className }: IphoneFrameProps) {
  return (
    <div className={`relative ${className} z-0 w-48 lg:w-64`}>
      <div className="absolute inset-y-3 left-3 right-3 -z-10 overflow-hidden rounded-3xl bg-[#EEEBE5] pt-5  shadow-xl shadow-black lg:pt-8">
        <div className="h-full w-full">{children}</div>
      </div>
      <IphoneSvg className="h-auto max-w-full pointer-events-none"/>
    </div>
  );
}
