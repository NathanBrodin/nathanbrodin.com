import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import Logo from '../../public/logo.svg'
import LanguageDropdown from "../LanguageDropdown"
import MobileDropdown from "../MobileDropdown"

export default function Nav() {
  const { t } = useTranslation("common")

  return (    
    <nav className="bg-neutral-600 glass-bg px-2 sm:px-4 sm:py-2.5 z-40 fixed w-screen">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <Link href={"https://nathanbrodin.com"}>
            <a className="flex items-center">
            <Logo className="h-6 mr-3 sm:h-10"/>
            <span className="self-center text-base sm:text-xl font-black text-white whitespace-nowrap">Nathan Brodin</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center md:order-2">
          <div className="flex items-center mr-4 md:order-2 ml-14">
             <LanguageDropdown />
             <MobileDropdown />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link href="/">
                  <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("home")}</a>
                </Link>
              </li>
              <li>
                <Link href="#projects" scroll={false} >
                  <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("projects")}</a> 
                </Link>
              </li>
              <li>
                <Link href="#about" scroll={false} >
                  <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("about")}</a> 
                </Link>
              </li>
              <li>
                <Link href="#contact" scroll={false} >
                  <a className="block py-2 pl-3 pr-4 text-white border-gray-700 rounded nav-link md:p-0 md:hover:text-primary-200 hover:bg-background-700 hover:text-primary-200 md:hover:bg-transparent">{t("contact")}</a>  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}