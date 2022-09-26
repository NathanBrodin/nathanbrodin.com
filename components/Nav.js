import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router"
import Image from 'next/image'
import fr from '../public/flags/fr.svg'
import en from '../public/flags/en.svg'
import hamburger from '../public/hamburger.svg'

export default function Nav() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const locale = router.locale

  function handleLocaleChange(e) {
    new_locale = router.locales[1 - router.locales.indexOf(router.locale)]
    console.log(new_locale)

    //router.push(router.pathname, router.pathname, { locale: e.target.value })
  }

  return (    
<nav className="border-gray-200 px-2 sm:px-4 py-2.5  bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <div className="flex items-center">
    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Nathan Brodin</span>
  </div>
  <div className="flex items-center md:order-2">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:bg-gray-700 hover:text-white">
        <div className="mr-2 w-5 h-5 rounded-full bg-orange-600">
          {/* <Image src={locale === "en" ? en : fr} alt="Change language" width={20} height={20} layout="fill"/> */}
        </div>
        { locale === "en" ? "English" : "Français" }
      </button>
      <div className="navbar hidden z-50 my-4 text-base list-none rounded divide-y divide-gray-100 shadow bg-gray-700" id="language-dropdown-menu" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
        <ul className="py-1" role="none">
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-400 hover:bg-gray-600 hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <div className="h-3.5 w-3.5 rounded-full mr-2 bg-primary-600">
                  {/* <Image src={en} alt="English" width={512} height={512} layout="fill"/> */}
                </div>
                English
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-400 hover:bg-gray-600 hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
                <div className="h-3.5 w-3.5 rounded-full mr-2 bg-primary-600">
                  {/* <Image src={fr} alt="French" width={512} height={512} layout="fill"/> */}
                </div>
                Français
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-language-select" type="button" className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <div className="w-6 h-6 bg-primary-300">
        {/* <Image src={hamburger} alt="menu" width={20} height={20} layout="fill"/> */}
      </div>
    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
    <ul className="flex flex-col p-4 mt-4  rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
      <li>
        <Link href="/">
          <a className="block py-2 pr-4 pl-3 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0" aria-current="page">{t("home")}</a>
        </Link></li>
      <li>
        <Link href="#projects" scroll={false} >
          <a className="block py-2 pr-4 pl-3  rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">{t("projects")}</a> 
        </Link></li>
      <li>
        <Link href="#about" scroll={false} >
          <a className="block py-2 pr-4 pl-3  rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">{t("about")}</a> 
        </Link></li>
      <li>
        <Link href="#contact" scroll={false} >
          <a className="block py-2 pr-4 pl-3  rounded md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">{t("contact")}</a>  
      </Link></li>
    </ul>
  </div>
  </div>
</nav>
  )

  /* <div className="mr-3 h-6 sm:h-9">
      <Image src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" layout="fill" />
    </div>  C'est pour faire le logo a mettre juste avant Nathan Brodin */

  return (
    <div>
        <div>
          <h1>NATHAN BRODIN</h1>
          <Image 
            src={locale === "en" ? en : fr}
            alt="Change language"
          />
        </div>
        <div>
        <nav>
          <ul>
                <li><Link href="/">
                  <a>{t("home")}</a>
                </Link></li>
                <li><Link href="#projects" scroll={false} >
                  <a>{t("projects")}</a> 
                </Link></li>
                <li><Link href="#about" scroll={false} >
                  <a>{t("about")}</a> 
                </Link></li>
                <li><Link href="#contact" scroll={false} >
                  <a>{t("contact")}</a>  
                </Link></li>
            </ul>
        </nav>
        </div>
    </div>
  )
  /* <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a  classNameName={styles.a}>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
          </ul> */
}