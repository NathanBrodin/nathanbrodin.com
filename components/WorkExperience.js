import useTranslation from "next-translate/useTranslation";

export default function WorkExperience() {
  const { t } = useTranslation("about");

  return (
    <div>
      <p className="text-sm font-light text-gray-400 sm:text-base">
        {t("work_section_1_description")}
      </p>
    </div>
  );
}
