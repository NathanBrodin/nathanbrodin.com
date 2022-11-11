import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import GitHub from "../../public/icons/github-full.svg";
import Linkedin from "../../public/icons/linkedin.svg";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <section
      className="flex flex-col px-6 py-12 lg:px-24 lg:py-24"
      id="contact"
    >
      <div className="self-center border-t border-neutral-600 py-8 lg:w-3/4 lg:px-20 lg:py-16">
        <h1 className="mb-2 bg-gradient-to-t from-gradient-start to-gradient-end bg-clip-text text-2xl font-black text-transparent lg:mb-4 lg:text-4xl">
          {t("contact_title")}
        </h1>
        <p className="font-base text-sm text-gray-300 lg:text-base">
          {t("contact_description")}
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <Link href={"https://github.com/NathanBrodin"} passHref={true}>
            <a
              target={"_blank"}
              className="glass-bg group flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-2 py-1 shadow-xl transition duration-300 ease-in-out ease-in-out hover:scale-105 hover:scale-105 hover:border-primary-500 sm:gap-4 sm:px-4 sm:py-3"
            >
              <GitHub className="h-6 w-6 sm:h-12 sm:w-12" />
              <p className="from-gradient-start to-gradient-end text-xs font-semibold transition duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:bg-clip-text group-hover:text-transparent sm:text-lg">
                NathanBrodin
              </p>
            </a>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nathan-brodin/"}
            passHref={true}
          >
            <a
              target={"_blank"}
              className="glass-bg group flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-2 py-1 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:border-primary-500 sm:gap-4 sm:px-4 sm:py-3"
            >
              <Linkedin className="h-6 w-6 sm:h-12 sm:w-12" />
              <p className="from-gradient-start to-gradient-end text-xs font-semibold transition duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:bg-clip-text group-hover:text-transparent sm:text-lg">
                in/nathan-brodin
              </p>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
