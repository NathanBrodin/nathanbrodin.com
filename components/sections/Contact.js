import useTranslation from "next-translate/useTranslation"

export default function Contact() {
  const { t } = useTranslation('contact')

  return (
    <section className="px-6 py-12 sm:px-24 sm:py-24" id="about">
      <div className="h-1 sm:h-1.5 w-16 sm:w-24 mb-4 sm:mb-8 rounded bg-gradient-to-r from-gradient-start to-gradient-end" />
      <h1 className="px-4 mb-2 sm:mb-4 text-2xl sm:text-4xl font-black text-white">{t("contact_title")}</h1>

      <p className="mb-6 text-sm sm:text-base font-light text-gray-400">
        {t("contact_description")}
      </p>
    </section>
  )
}