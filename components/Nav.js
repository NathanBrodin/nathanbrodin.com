import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router"
import styles from "../styles/Nav.module.css"

export default function Nav() {
  const { t } = useTranslation("common")
  const router = useRouter()
  const locale = router.locale
  const locale_avaiable = (locale === "en" ? "fr" : "en")

  function handleLocaleChange(e) {
    new_locale = router.locales[1 - router.locales.indexOf(router.locale)]
    console.log(new_locale)

    //router.push(router.pathname, router.pathname, { locale: e.target.value })
  }

  return (
    <div className={styles.glassContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>NATHAN BRODIN</h1>
        </div>
        <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <p className={styles.p}>{locale_avaiable.toUpperCase()}</p>

          <ul className={styles.ul}>
                <li className={styles.li}><Link href="/">
                  <a className={styles.a}>{t("home")}</a>
                </Link></li>
                <li className={styles.li}><Link href="#projects" scroll={false} >
                  <a className={styles.a}>{t("projects")}</a> 
                </Link></li>
                <li className={styles.li}><Link href="#about" scroll={false} >
                  <a className={styles.a}>{t("about")}</a> 
                </Link></li>
                <li className={styles.li}><Link href="#contact" scroll={false} >
                  <a className={styles.a}>{t("contact")}</a>  
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
                <a  className={styles.a}>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
          </ul> */
}
