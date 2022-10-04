import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router"
import En from '../../public/flags/en.svg'
import Fr from '../../public/flags/fr.svg'
import Hamburger from '../../public/icons/hamburger.svg'
import Logo from '../../public/logo.svg'

export default function Nav() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const locale = router.locale

  const currentSection = {
    home: true,
    projects: false,
    about: false,
    contact: false,
  }

  // TODO: Make hamburger menu work on mobile

  return (    
    <nav className="bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-2 sm:px-4 py-2.5 z-40 fixed w-screen">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <Link href={"https://nathanbrodin.com"}>
            <a className="flex items-center">
            <Logo className="h-6 mr-3 sm:h-10"/>
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">Nathan Brodin</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center md:order-2">
          <div className="flex items-center mr-4 md:order-2 ml-14">
             <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center p-2 mr-4 text-sm text-gray-500 rounded-lg cursor-pointer hover:bg-background-700 hover:text-white">
                { locale === "en" ? "English" : "Français" }
              </button>
              {/* Dropdown menu */}
              <div className="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded-md shadow dropdown bg-background-700" id="language-dropdown-menu" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                <ul className="py-1" role="none">
                  <li>
                    <Link href={router.asPath} locale={"en"}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:bg-background-600 hover:text-white" role="menuitem">
                          <div className="inline-flex items-center">
                            <En className="h-3.5 w-3.5 rounded-full mr-2" id="flag-icon-css-en"/>
                            English
                          </div>
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={router.asPath} locale={"fr"}>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:bg-background-600 hover:text-white" role="menuitem">
                        <div className="inline-flex items-center">
                          <Fr className="h-3.5 w-3.5 rounded-full mr-2" id="flag-icon-css-fr"/>
                          Français
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-background-700 focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <Hamburger className="w-6 h-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
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