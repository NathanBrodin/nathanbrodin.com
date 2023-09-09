import { ReactNode } from "react";

interface WebPageProps {
  children: ReactNode;
}

export default function WebPage({ children }: WebPageProps) {
  return (
    <div className="h-[600px] w-full max-w-[700px] overflow-hidden rounded-3xl border-8 border-white/30 md:h-[500px]">
      {children}
    </div>
  );
}
