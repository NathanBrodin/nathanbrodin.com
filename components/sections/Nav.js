import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import Logo from '../../public/logo.svg'
import LanguageDropdown from "../LanguageDropdown"
import MobileDropdown from "../MobileDropdown"

export default function Nav() {
  const { t } = useTranslation("common")

  return (    
    <nav className="bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-2 sm:px-4 sm:py-2.5 z-40 fixed w-screen">
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

{/* <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-background-700 focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <Hamburger className="w-6 h-6" aria-hidden="true"/>
              </button> */}