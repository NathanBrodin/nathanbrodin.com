import useTranslation from "next-translate/useTranslation"
import Project from "../Project"

export default function Projects() {
  const { t } = useTranslation('projects')
  const title = t('project_title')
  const projectsList = t('projectsList', { count: 1 }, { returnObjects: true })
  
  return (
    <section className="px-24 py-24" id="projects">
      <div className="absolute mt-32 rounded-full left-8 h-72 w-72 bg-gradient-end filter blur-xl opacity-60" />
      <div className="relative h-1.5 w-24 mb-8 rounded bg-gradient-to-r from-gradient-start to-gradient-end" />
      <h1 className="max-w-2xl px-4 mb-4 text-4xl font-bold text-white md:text-4xl xl:text-4xl">{title}</h1>
      <div className="flex flex-col justify-center">
        {projectsList.map((project, index) => (
          <Project key={index} project={project}/>
        ))}
      </div>
    </section>
  )
}
