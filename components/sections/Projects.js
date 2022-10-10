import useTranslation from "next-translate/useTranslation"
import Project from "../Project"

export default function Projects() {
  const { t } = useTranslation('projects')
  const title = t('project_title')
  const description = t('project_description')
  const projectsList = t('projectsList', { count: 1 }, { returnObjects: true })
  
  return (
    <section className="px-24 py-24" id="projects">
      <h1 className="max-w-2xl px-4 mb-4 text-4xl font-black text-white md:text-4xl xl:text-4xl">{title}</h1>
      <p className="max-w-4xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-base">{description}</p>
      <div className="grid grid-cols-2 gap-14 px-14 pt-4">
        {projectsList.map((project, index) => (
          <Project key={index} project={project}/>
        ))}
      </div>
    </section>
  )
}
