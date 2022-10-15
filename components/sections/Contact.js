import useTranslation from "next-translate/useTranslation"
import Link from "next/link"
import GitHub from "../../public/icons/github-full.svg"
import Linkedin from "../../public/icons/linkedin.svg"

export default function Contact() {
  const { t } = useTranslation('contact')

  return (
    <section className="px-6 py-12 sm:px-24 sm:py-24" id="contact">
      <div className="h-1 sm:h-1.5 w-16 sm:w-24 mb-4 sm:mb-8 rounded bg-gradient-to-r from-gradient-start to-gradient-end" />
      <h1 className="px-4 mb-2 sm:mb-4 text-2xl sm:text-4xl font-black text-white">{t("contact_title")}</h1>

      <p className="mb-6 text-sm sm:text-base font-light text-gray-400">
        {t("contact_description")}
      </p>

      <div className="flex gap-3 sm:gap-4">
        <Link href={"https://github.com/NathanBrodin"} passHref={true}>
          <a target={"_blank"} className="flex items-center gap-2 sm:gap-4 rounded-2xl p-2 sm:p-4 bg-gradient-to-br from-gradient-start via-gray-700 to-gradient-end shadow-xl hover:scale-105 transition ease-in-out duration-300">
            <GitHub className="w-8 h-8 sm:w-16 sm:h-16"/>
            <p className="font-bold text-sm sm:text-lg">NathanBrodin</p>
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/nathan-brodin/"} passHref={true}>
          <a target={"_blank"} className="flex items-center gap-4 rounded-2xl p-2 sm:p-4 bg-gradient-to-br from-gradient-start via-gray-700 to-gradient-end shadow-xl hover:scale-105 transition ease-in-out duration-300">
            <Linkedin className="w-8 h-8 sm:w-16 sm:h-16"/>
            <p className="font-bold text-sm sm:text-lg">in/nathan-brodin</p>
          </a>
        </Link>
      </div>
    </section>
  )
}