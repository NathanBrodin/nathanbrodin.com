import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import TooltipGitHub from './TooltipGitHub'
import TooltipLink from './TooltipLink'

export default function Project(props) {
  const project = props.project

  return (
    <div data-aos="fade-up"  data-aos-duration="800" data-aos-delay={(project.id % 2) === 0 ? "0" : "200"} className='grid gap-8 content-between bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 rounded-lg z-10 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-lg transition ease-in-out duration-300 group'>
      <div>
        <div className='flex w-full justify-between'>
          <Image src={project.icon} alt={project.title} width={44} height={44}/>
          <div className='flex'>
            <TooltipGitHub link={project.github}/>
            <TooltipLink link={project.url} text={project.linkText}/>
          </div>
        </div>
        <Link href={project.url} passHref={true}>
          <a target="_blank">
          <h1 className='font-bold text-white text-2xl my-6 group-hover:text-primary-200'>{project.title}</h1>
          </a>
        </Link>
        <p className='text-gray-400 text-sm sm:text-base mt-2'>{project.description}</p>
      </div>
      <div className='flex flex-wrap'>
        {project.tags.map((tag, index) => (
          <Tag key={index} tag={tag}/>
        ))}
      </div>
    </div>
  )
}