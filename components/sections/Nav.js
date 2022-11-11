import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Logo from "../../public/logo.svg";
import LanguageDropdown from "../LanguageDropdown";
import MobileDropdown from "../MobileDropdown";

export default function Nav() {
  const { t } = useTranslation("common");

  return (
    <nav className="glass-bg fixed z-40 w-screen bg-neutral-600 px-2 sm:px-4 sm:py-2.5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link href={"https://nathanbrodin.com"}>
            <a className="flex items-center">
              <Logo className="mr-3 h-6 sm:h-10" />
              <span className="self-center whitespace-nowrap text-base font-black text-white sm:text-xl">
                Nathan Brodin
              </span>
            </a>
          </Link>
        </div>
        <div className="flex items-center md:order-2">
          <div className="mr-4 ml-14 flex items-center md:order-2">
            <LanguageDropdown />
            <MobileDropdown />
          </div>
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                    {t("home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#projects" scroll={false}>
                  <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                    {t("projects")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#about" scroll={false}>
                  <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                    {t("about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact" scroll={false}>
                  <a className="nav-link block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-background-700 hover:text-primary-200 md:p-0 md:hover:bg-transparent md:hover:text-primary-200">
                    {t("contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
