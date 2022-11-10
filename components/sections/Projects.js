import useTranslation from "next-translate/useTranslation"
import { useEffect } from "react"
import Project from "../Project"

import Blob1 from "../../public/blobs/blob1.svg";
import Blob2 from "../../public/blobs/blob2.svg";
import Blob3 from "../../public/blobs/blob3.svg";

export default function Projects() {
  const { t } = useTranslation('projects')
  const title = t('project_title')
  const description = t('project_description')
  const projectsList = t('projectsList', { count: 1 }, { returnObjects: true })

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
    const card = document.querySelectorAll(".gradient-radial")[0]
    card.style.setProperty("--mouse-pos-x", `100px`);
    card.style.setProperty("--mouse-pos-y", `100px`);
  }, [])
  
  return (
    <section className="px-6 py-12 lg:px-24 lg:py-24 z-50 flex flex-col" id="projects">
      <div className="lg:w-3/4 lg:px-20 py-8 self-center">
        <h1 className="mb-2 lg:mb-4 text-2xl lg:text-4xl font-black bg-gradient-to-t from-gradient-start to-gradient-end bg-clip-text text-transparent">{title}</h1>
        <p className="text-sm lg:text-base font-base text-gray-300">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 lg:px-14 pt-4 z-10" onMouseMove={handleMouseMove}>
          {projectsList.map((project, index) => (
            <Project key={index} project={project}/>
          ))}
      </div>
      <div className="absolute w-32 h-32 left-0 ml-12 lg:w-96 lg:h-96 lg:ml-28 opacity-30 z-0">
        <Blob1 className="absolute text-gradient-start fill-current top-0 -left-10 filter blur-xl opacity-70 animate-blob"/>
        <Blob2 className="absolute text-gradient-middle fill-current self-center filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
        <Blob3 className="absolute text-gradient-end fill-current -bottom-8 left-20 filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
      </div>
    </section>
  )
}
