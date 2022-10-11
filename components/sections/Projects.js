import useTranslation from "next-translate/useTranslation"
import Project from "../Project"

export default function Projects() {
  const { t } = useTranslation('projects')
  const title = t('project_title')
  const description = t('project_description')
  const projectsList = t('projectsList', { count: 1 }, { returnObjects: true })
  
  return (
    <section className="px-6 py-12 sm:px-24 sm:py-24" id="projects">
      <h1 className="px-4 mb-2 sm:mb-4 text-2xl sm:text-4xl font-black text-white">{title}</h1>
      <p className="mb-6 text-sm sm:text-base font-light text-gray-400">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14 sm:px-14 pt-4">
        {projectsList.map((project, index) => (
          <Project key={index} project={project}/>
        ))}
      </div>
    </section>
  )
}
