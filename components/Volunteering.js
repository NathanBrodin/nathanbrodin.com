import useTranslation from "next-translate/useTranslation"

export default function Volunteering() {
  const { t } = useTranslation('about')

  return (
    <div className="sm:px-32 flex flex-col gap-8">       
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
              <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("volunteering_section_1_title")}</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_1_subtitle")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_1_date")}</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_1_description")}</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
              <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("volunteering_section_2_title")}</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_2_subtitle")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_2_date")}</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_2_description")}</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
            <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("volunteering_section_3_title")}</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_3_subtitle")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_3_date")}</p>
            </div>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">{t("volunteering_section_3_description")}</p>
          </div>
        </div>
    </div>
  )
}
