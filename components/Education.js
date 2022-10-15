import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Education() {
  const { t } = useTranslation('about')

  return (
    <div className="sm:px-32 flex flex-col gap-8">       
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full sm:mr-16">
            <Link href={"https://www.esiea.fr/"} passHref={true}>
              <a target="_blank">
                <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("education_section_1_title")}</h3>
              </a>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_1_type")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_1_date")}</p>
            </div>
            <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_1_location")}</p>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_1_description")}</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full mr-16">
            <Link href={"https://net.centria.fi/en/"} passHref={true}>
              <a target="_blank">
                <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("education_section_2_title")}</h3>
              </a>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_2_type")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_2_date")}</p>
            </div>
            <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_2_location")}</p>
            <br />
            <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_2_description")}</p>
          </div>
        </div>
        <div className="flex hover:translate-x-6 transition ease-in-out duration-300 group">
          <div className="w-1 mr-4 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end rounded-sm" />
          <div className="w-full mr-16">
            <h3 className="sm:text-xl font-bold text-white group-hover:text-primary-200">{t("education_section_3_title")}</h3>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_3_type")}</p>
              <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_3_date")}</p>
            </div>
            <p className="text-sm sm:text-base font-light text-gray-400">{t("education_section_3_location")}</p>
          </div>
        </div>
    </div>
  )
}
