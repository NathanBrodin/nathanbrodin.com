import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <div className="p-4">
      <footer className="flex flex-col items-center justify-between rounded-lg bg-background-600 bg-opacity-10 bg-clip-padding p-6 shadow backdrop-blur-sm backdrop-filter sm:flex-row">
        <span className="text-sm text-gray-400">
          © {year}{" "}
          <a href="https://nathanbrodin.com/" className="hover:underline">
            Nathan Brodin™
          </a>
          . {t("rights")}
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-400 sm:mt-0">
          <li>
            <Link
              href={
                "https://github.com/NathanBrodin/nathanbrodin.com/blob/main/LICENCE.md"
              }
              passHref={true}
            >
              <a target="_blank" className="mr-4 hover:underline sm:mr-6 ">
                {t("licence")}
              </a>
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/NathanBrodin/nathanbrodin.com"}
              passHref={true}
            >
              <a target="_blank" className="mr-4 hover:underline sm:mr-6">
                {t("github")}
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
