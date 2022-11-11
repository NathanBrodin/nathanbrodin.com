import useTranslation from "next-translate/useTranslation";

export default function Volunteering() {
  const { t } = useTranslation("about");

  return (
    <div className="flex flex-col gap-8 sm:px-32">
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="w-full sm:mr-16">
          <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
            {t("volunteering_section_1_title")}
          </h3>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_1_subtitle")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_1_date")}
            </p>
          </div>
          <br />
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("volunteering_section_1_description")}
          </p>
        </div>
      </div>
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="w-full sm:mr-16">
          <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
            {t("volunteering_section_2_title")}
          </h3>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_2_subtitle")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_2_date")}
            </p>
          </div>
          <br />
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("volunteering_section_2_description")}
          </p>
        </div>
      </div>
      <div className="group flex transition duration-300 ease-in-out hover:translate-x-6">
        <div className="mr-4 w-1 rounded-sm bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end" />
        <div className="w-full sm:mr-16">
          <h3 className="font-bold text-white group-hover:text-primary-200 sm:text-xl">
            {t("volunteering_section_3_title")}
          </h3>
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_3_subtitle")}
            </p>
            <p className="text-sm font-light text-gray-400 sm:text-base">
              {t("volunteering_section_3_date")}
            </p>
          </div>
          <br />
          <p className="text-sm font-light text-gray-400 sm:text-base">
            {t("volunteering_section_3_description")}
          </p>
        </div>
      </div>
    </div>
  );
}
