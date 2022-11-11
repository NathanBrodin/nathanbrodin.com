import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Education() {
  const { t } = useTranslation("about");

  return (
    <div className="flex flex-col gap-8 sm:px-32">
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="w-full sm:mr-16">
          <Link href={"https://www.esiea.fr/"} passHref={true}>
            <a target="_blank">
              <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
                {t("education_section_1_title")}
              </h3>
            </a>
          </Link>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_1_type")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_1_date")}
            </p>
          </div>
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("education_section_1_location")}
          </p>
          <br />
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("education_section_1_description")}
          </p>
        </div>
      </div>
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="mr-16 w-full">
          <Link href={"https://net.centria.fi/en/"} passHref={true}>
            <a target="_blank">
              <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
                {t("education_section_2_title")}
              </h3>
            </a>
          </Link>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_2_type")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_2_date")}
            </p>
          </div>
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("education_section_2_location")}
          </p>
          <br />
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("education_section_2_description")}
          </p>
        </div>
      </div>
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="mr-16 w-full">
          <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
            {t("education_section_3_title")}
          </h3>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_3_type")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("education_section_3_date")}
            </p>
          </div>
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("education_section_3_location")}
          </p>
        </div>
      </div>
    </div>
  );
}
