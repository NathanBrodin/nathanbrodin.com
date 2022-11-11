import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Arrow from "../../public/icons/arrow.svg";

import Blob1 from "../../public/blobs/blob1.svg";
import Blob2 from "../../public/blobs/blob2.svg";
import Blob3 from "../../public/blobs/blob3.svg";

export default function Home() {
  const { t } = useTranslation("home");
  const name = t("home_name");
  const nameLetters = name.split("");
  let age = getMyAge();

  function getMyAge() {
    let birthDate = new Date("2002-07-07");
    let ageDifMs = Date.now() - birthDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <section
      className="home-clip-phone lg:home-clip relative flex h-[110vh] items-center justify-between bg-background-900"
      id="home"
    >
      <div className="relative z-10 mx-8 lg:mx-32">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-2 text-xs font-bold text-gray-400 lg:text-lg">
            {t("home_title")}
          </h1>
          <h1 className="mb-2 text-4xl font-black text-white lg:text-7xl">
            {nameLetters.map((letter, index) => (
              <span
                key={index}
                className={`${
                  letter === " " ? "ml-1" : "ml-0"
                } hover:text-primary-200`}
              >
                {letter}
              </span>
            ))}
          </h1>
          <h1 className="mb-8 bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-3xl font-extrabold text-transparent lg:text-6xl">
            {t("home_subtitle")}
          </h1>
          <p className="mb-6 text-lg font-light text-gray-400 lg:text-xl">
            {t("home_subheading", { age: age })}{" "}
            <Link href={"https://www.esiea.fr"} passHref={true}>
              <a target="_blank" className="text-primary-200 hover:underline">
                ESIEA
              </a>
            </Link>
            .<br></br> {t("home_opportunity")}
          </p>
          <Link href="#projects" scroll={false}>
            <a className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 font-medium shadow-2xl">
              <span className="ease absolute top-0 left-0 -mt-10 -ml-3 h-40 w-40 rounded-full bg-gradient-start blur-lg transition-all duration-700"></span>
              <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
                <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-gradient-middle blur-lg"></span>
                <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-gradient-end blur-lg"></span>
              </span>
              <span className="relative flex items-center text-white">
                {t("home_get_started")}
                <Arrow className="ml-2 -mr-1 h-5 w-5 transition duration-700 group-hover:rotate-90" />
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="home-bg absolute h-full w-full opacity-50" />
      <div className="absolute right-0 mr-12 h-32 w-32 lg:mr-28 lg:h-96 lg:w-96">
        <Blob1 className="absolute top-0 -left-10 animate-blob fill-current text-gradient-start opacity-70 blur-xl filter" />
        <Blob2 className="animation-delay-2000 absolute animate-blob self-center fill-current text-gradient-middle opacity-70 blur-xl filter" />
        <Blob3 className="animation-delay-4000 absolute -bottom-8 left-20 animate-blob fill-current text-gradient-end opacity-70 blur-xl filter" />
      </div>
    </section>
  );
}
