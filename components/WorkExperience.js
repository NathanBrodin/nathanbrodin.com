import useTranslation from "next-translate/useTranslation"

export default function WorkExperience() {
  const { t } = useTranslation('about')

  return (
    <div>
        <p className="text-sm sm:text-base font-light text-gray-400">{t("work_section_1_description")}</p>
    </div>
  )
}
