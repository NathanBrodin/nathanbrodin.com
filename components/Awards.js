import useTranslation from "next-translate/useTranslation"

export default function Awards() {
  const { t } = useTranslation('about')

  return (
    <div className="flex flex-col items-center gap-16 my-16 sm:my-24">
        <div className="flex flex-col items-center hover:scale-110 transition ease-in-out duration-300">
            <h3 className="text-lg text-center sm:text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end">{t("awards_section_1_title")}</h3>
            <p className="text-sm text-center sm:text-base font-light text-gray-400">{t("awards_section_1_description")}</p>
        </div>  
        <div className="flex flex-col items-center hover:scale-110 transition ease-in-out duration-300">
            <h3 className="text-lg text-center sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end mb-2">{t("awards_section_2_title")}</h3>
            <p className="text-sm text-center sm:text-base font-light text-gray-400">{t("awards_section_2_description")}</p>
        </div> 
    </div>
  )
}
