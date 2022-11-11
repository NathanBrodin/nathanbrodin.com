import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import Project from "../Project";

import Blob1 from "../../public/blobs/blob1.svg";
import Blob2 from "../../public/blobs/blob2.svg";
import Blob3 from "../../public/blobs/blob3.svg";

export default function Projects() {
  const { t } = useTranslation("projects");
  const title = t("project_title");
  const description = t("project_description");
  const projectsList = t("projectsList", { count: 1 }, { returnObjects: true });

  function handleMouseMove(e) {
    for (const card of document.querySelectorAll(".gradient-radial")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-pos-x", `${x}px`);
      card.style.setProperty("--mouse-pos-y", `${y}px`);
    }
  }

  useEffect(() => {
    const card = document.querySelectorAll(".gradient-radial")[0];
    card.style.setProperty("--mouse-pos-x", `100px`);
    card.style.setProperty("--mouse-pos-y", `100px`);
  }, []);

  return (
    <section
      className="z-50 flex flex-col px-6 py-12 lg:px-24 lg:py-24"
      id="projects"
    >
      <div className="self-center py-8 lg:w-3/4 lg:px-20">
        <h1 className="mb-2 bg-gradient-to-t from-gradient-start to-gradient-end bg-clip-text text-2xl font-black text-transparent lg:mb-4 lg:text-4xl">
          {title}
        </h1>
        <p className="font-base text-sm text-gray-300 lg:text-base">
          {description}
        </p>
      </div>
      <div
        className="z-10 grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2 lg:gap-8 lg:px-14"
        onMouseMove={handleMouseMove}
      >
        {projectsList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div className="absolute left-0 z-0 ml-12 h-32 w-32 opacity-30 lg:ml-28 lg:h-96 lg:w-96">
        <Blob1 className="absolute top-0 -left-10 animate-blob fill-current text-gradient-start opacity-70 blur-xl filter" />
        <Blob2 className="animation-delay-2000 absolute animate-blob self-center fill-current text-gradient-middle opacity-70 blur-xl filter" />
        <Blob3 className="animation-delay-4000 absolute -bottom-8 left-20 animate-blob fill-current text-gradient-end opacity-70 blur-xl filter" />
      </div>
    </section>
  );
}
