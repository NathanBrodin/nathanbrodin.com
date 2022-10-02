import useTranslation from "next-translate/useTranslation"
import Project from "../Project"

export default function Projects() {
  const { t } = useTranslation('projects')
  const title = t('project_title')
  const projectsList = t('projectsList', { count: 1 }, { returnObjects: true })
  
  return (
    <section className="px-24 py-24" id="projects">
      <div className="h-1.5 w-24 mb-8 rounded bg-gradient-to-r from-gradient-start to-gradient-end">
        
      </div>
      <h1 className="max-w-2xl px-4 mb-4 text-4xl font-bold text-white md:text-4xl xl:text-4xl">{title}</h1>

      <div className="flex flex-col justify-center">
        {projectsList.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  )
}
