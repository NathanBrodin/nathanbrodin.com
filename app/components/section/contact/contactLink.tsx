import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export type ContactLinkProps = {
  link: string;
  content: string;
  Icon: ReactNode;
  delay: number;
};

export default function ContactLink({
  link,
  content,
  Icon,
  delay,
}: ContactLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
      className="group flex w-14 lg:w-20 overflow-hidden rounded-xl border border-white/10 bg-white/80 shadow-lg ring-1 ring-gray-900/5 transition-all duration-500 hover:w-64 lg:hover:w-72"
    >
      <Link
        href={link}
        target="_blank"
        className="flex items-center gap-4 lg:gap-8  p-3 lg:p-5"
      >
        {Icon}
        <h1 className="whitespace-nowrap text-lg lg:text-xl font-bold">{content}</h1>
      </Link>
    </motion.div>
  );
}
