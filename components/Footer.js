import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'

export default function Footer() {
  const { t } = useTranslation('common')
  const year = new Date().getFullYear()

  return (
    <div className="p-4">
      <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
        <span className="text-sm sm:text-center text-gray-400">© {year} <a href="https://nathanbrodin.com/" className="hover:underline">Nathan Brodin™</a>. {t('rights')}</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-400 sm:mt-0">
          <li>
            <Link href={"https://github.com/NathanBrodin/nathanbrodin.com/blob/main/LICENCE.md"} passHref={true}>
              <a target="_blank" className="mr-4 hover:underline md:mr-6 ">{t('licence')}</a>
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/NathanBrodin/nathanbrodin.com"} passHref={true}>
              <a target="_blank" className="mr-4 hover:underline md:mr-6">{t('github')}</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}
