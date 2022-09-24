import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router"
import { useState } from "react"

export default function Nav() {
  const { t } = useTranslation("common")
  const router = useRouter()

  return (
    <div>
        <nav>
          <div>
            <h1>Nathan Brodin</h1>
          </div>

          <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
          </ul>

          <ul>
                <li><Link href="/" scroll={false} >
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
  )
}
