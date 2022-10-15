import useTranslation from "next-translate/useTranslation"
import Awards from "../Awards"
import Education from "../Education"
import Skills from "../Skills"
import Volunteering from "../Volunteering"
import WorkExperience from "../WorkExperience"

export default function About() {
  const { t } = useTranslation('about')

  return (
    <section className="px-6 py-12 sm:px-24 sm:py-24" id="about">
      <div>
        <div className="h-1 sm:h-1.5 w-16 sm:w-24 mb-4 sm:mb-8 rounded bg-gradient-to-r from-gradient-start to-gradient-end" />
        <h1 className="px-4 mb-2 sm:mb-4 text-2xl sm:text-4xl font-black text-white">{t("about_title")}</h1>
        <p className="text-sm sm:text-base font-light text-gray-400 sm:w-2/3">{t("about_description")}</p>
        <br />
        <p className="mb-6 text-sm sm:text-base font-light text-gray-400 sm:w-2/3">{t("about_description_2")}</p>
      </div>

      <div className="flex flex-col gap-16 sm:gap-32 my-16">
        <div>
          <h2 className="px-4 mb-8 text-xl sm:text-2xl font-bold text-white">My Skills</h2>
          <div className="flex justify-center">
            <Skills />
          </div>
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl sm:text-2xl font-bold text-white">My Education</h2>
          <Education />
        </div>
        <div>
          <h2 className="px-4 mb-4 text-xl sm:text-2xl font-bold text-white">Work Experience</h2>
          <WorkExperience />
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl sm:text-2xl font-bold text-white">Awards</h2>
          <Awards />
        </div>
        <div>
          <h2 className="px-4 mb-8 text-xl sm:text-2xl font-bold text-white">Volunteering experiences</h2>
          <Volunteering />
        </div>
      </div>
    </section>
  )
}
