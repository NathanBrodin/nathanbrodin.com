import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export type ContactLinkProps = {
  link: string;
  content: string;
  Icon: ReactNode;
  delay: number;
  inView?: boolean;
};

export default function ContactLink({
  link,
  content,
  Icon,
  delay,
  inView,
}: ContactLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{
        delay: delay,
      }}
      className="group flex w-14 overflow-hidden rounded-xl border border-white/10 bg-white/80 shadow-lg ring-1 ring-gray-900/5 transition-all duration-500 hover:w-64 lg:w-20 lg:hover:w-72"
    >
      <Link
        href={link}
        target="_blank"
        className="flex items-center gap-4 p-3  lg:gap-8 lg:p-5"
      >
        {Icon}
        <h1 className="whitespace-nowrap text-lg font-bold lg:text-xl">
          {content}
        </h1>
      </Link>
    </motion.div>
  );
}
