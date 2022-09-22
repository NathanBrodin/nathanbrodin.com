import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useTheme } from 'next-themes'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation('home')
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Nathan Brodin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h2>{t("home_title")}</h2>
        <h1>{t('home_name')}</h1>
        <h3>{t("home_subheading", {age: 20})}</h3>
        <h3>{t("home_opportunity")}</h3>

        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="sunset">Sunset</option>
          <option value="aurora">Aurora</option>
          <option value="seashore">Seashore</option>
        </select>

      </div>
    </div>
  )
}
