import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 md:p-8 flex flex-col text-gray-600 mx-auto w-full max-w-7xl">
      <p className="font-italic">
        Made using React & Next.js, TypeScript; Tailwind CSS and Framer Motion
      </p>
      <div className="w-full flex justify-between">
        <p>
          <span>© {year} </span>
          Nathan Brodin™. All rights reserved.
        </p>
        <Link
          href={"https://github.com/NathanBrodin/nathanbrodin.com"}
          target="_blank"
          className="hover:underline transition-all"
        >
          See this repository on Github
        </Link>
      </div>
    </footer>
  );
}
