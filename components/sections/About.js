import useTranslation from "next-translate/useTranslation";
import Awards from "../Awards";
import Education from "../Education";
import Skills from "../Skills";
import Volunteering from "../Volunteering";
import WorkExperience from "../WorkExperience";

export default function About() {
  const { t } = useTranslation("about");
  const age = getMyAge();
  const year = currentYear();

  function getMyAge() {
    let birthDate = new Date("2002-07-07");
    let ageDifMs = Date.now() - birthDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  function currentYear() {
    let graduateDate = new Date("2020-07-01");
    let yearDifMs = Date.now() - graduateDate.getTime();
    return Math.abs(new Date(yearDifMs).getUTCFullYear() - 1970) + 1;
  }

  return (
    <section className="flex flex-col px-6 py-12 lg:px-24 lg:py-24" id="about">
      <div className="self-center border-t border-neutral-600 py-8 lg:w-3/4 lg:px-20 lg:py-16">
        <h1 className="mb-2 bg-gradient-to-t from-gradient-start to-gradient-end bg-clip-text text-2xl font-black text-transparent lg:mb-4 lg:text-4xl">
          {t("about_title")}
        </h1>
        <p className="font-base text-sm text-gray-300 lg:text-base">
          {t("about_description", { age: age })}
        </p>
        <br />
        <p className="font-base mb-6 text-sm text-gray-300 lg:text-base">
          {t("about_description_2", { year: year })}
        </p>
      </div>

      <div className="my-16 flex flex-col gap-16 lg:gap-32">
        <div>
          <h2 className="mb-8 text-xl font-bold text-white lg:text-2xl">
            {t("about_section_1_title")}
          </h2>
          <div className="flex justify-center">
            <Skills />
          </div>
        </div>
        <div>
          <h2 className="mb-8 px-4 text-xl font-bold text-white lg:text-2xl">
            {t("about_section_2_title")}
          </h2>
          <Education />
        </div>
        <div>
          <h2 className="mb-4 px-4 text-xl font-bold text-white lg:text-2xl">
            {t("about_section_3_title")}
          </h2>
          <WorkExperience />
        </div>
        <div>
          <h2 className="mb-8 px-4 text-xl font-bold text-white lg:text-2xl">
            {t("about_section_4_title")}
          </h2>
          <Awards />
        </div>
        <div>
          <h2 className="mb-8 px-4 text-xl font-bold text-white lg:text-2xl">
            {t("about_section_5_title")}
          </h2>
          <Volunteering />
        </div>
      </div>
    </section>
  );
}
