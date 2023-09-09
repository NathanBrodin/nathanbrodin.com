import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col p-4 text-gray-600 md:p-8">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <p>
          <span>© {year} </span>
          Nathan Brodin™. All rights reserved.
        </p>
        <Link
          href={"https://github.com/NathanBrodin/nathanbrodin.com"}
          target="_blank"
          className="transition-all hover:underline"
        >
          See this repository on Github
        </Link>
      </div>
    </footer>
  );
}
