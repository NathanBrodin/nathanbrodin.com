import useTranslation from "next-translate/useTranslation"
import Awards from "../Awards"
import Education from "../Education"
import Skills from "../Skills"
import Volunteering from "../Volunteering"
import WorkExperience from "../WorkExperience"

export default function About() {
  const { t } = useTranslation('about')
  const age = getMyAge()
  const year = currentYear()

  function getMyAge() {
    let birthDate = new Date('2002-07-07')
    let ageDifMs = Date.now() - birthDate.getTime()
    let ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  function currentYear() {
    let graduateDate = new Date('2020-07-01')
    let yearDifMs = Date.now() - graduateDate.getTime()
    return Math.abs(new Date(yearDifMs).getUTCFullYear() - 1970) + 1
  }

  return (
    <section className="px-6 py-12 lg:px-24 lg:py-24 flex flex-col" id="about">
      <div className="border-t border-neutral-600 lg:w-3/4 lg:px-20 py-8 lg:py-16 self-center">
        <h1 className="mb-2 lg:mb-4 text-2xl lg:text-4xl font-black bg-gradient-to-t from-gradient-start to-gradient-end bg-clip-text text-transparent">{t("about_title")}</h1>
        <p className="text-sm lg:text-base font-base text-gray-300">{t("about_description", {age: age})}</p>
        <br />
        <p className="mb-6 text-sm lg:text-base font-base text-gray-300">{t("about_description_2", {year: year})}</p>
      </div>

      <div className="flex flex-col gap-16 lg:gap-32 my-16">
        <div>
          <h2 className="mb-8 text-xl lg:text-2xl font-bold text-white">{t("about_section_1_title")}</h2>
          <div className="flex justify-center">
            <Skills />
          </div>
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl lg:text-2xl font-bold text-white">{t("about_section_2_title")}</h2>
          <Education />
        </div>
        <div>
          <h2 className="px-4 mb-4 text-xl lg:text-2xl font-bold text-white">{t("about_section_3_title")}</h2>
          <WorkExperience />
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl lg:text-2xl font-bold text-white">{t("about_section_4_title")}</h2>
          <Awards />
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl lg:text-2xl font-bold text-white">{t("about_section_5_title")}</h2>
          <Volunteering />
        </div>
      </div>
    </section>
  )
}
