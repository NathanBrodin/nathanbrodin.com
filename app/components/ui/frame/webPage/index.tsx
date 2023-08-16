import { ReactNode } from "react";

interface WebPageProps {
  children: ReactNode;
}

export default function WebPage({ children }: WebPageProps) {
  return (
    <div className="w-full max-w-[700px] h-[600px] md:h-[500px] rounded-3xl border-8 overflow-hidden border-white/30">
      {children}
    </div>
  );
}
