import { ReactNode } from "react";
import Image from "next/image";

interface IphoneFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function IphoneFrame({ children, className }: IphoneFrameProps) {
  return (
    <div>
      <Image
      className="h-1/2 w-fit"
        src="/iphoneFrame.svg"
        width={447}
        height={906}
        layout="responsive"
        alt="Iphone"
      />
    </div>
  );
}
