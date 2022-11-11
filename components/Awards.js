import useTranslation from "next-translate/useTranslation";

export default function Awards() {
  const { t } = useTranslation("about");

  return (
    <div className="my-16 flex flex-col items-center gap-16 sm:my-24">
      <div className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110">
        <h3 className="mb-2 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-lg font-bold text-transparent sm:text-xl">
          {t("awards_section_1_title")}
        </h3>
        <p className="text-center text-sm font-light text-gray-400 sm:text-base">
          {t("awards_section_1_description")}
        </p>
      </div>
      <div className="flex flex-col items-center transition duration-300 ease-in-out hover:scale-110">
        <h3 className="mb-2 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-center text-lg font-bold text-transparent sm:text-xl">
          {t("awards_section_2_title")}
        </h3>
        <p className="text-center text-sm font-light text-gray-400 sm:text-base">
          {t("awards_section_2_description")}
        </p>
      </div>
    </div>
  );
}
