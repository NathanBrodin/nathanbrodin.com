import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import TooltipGitHub from './TooltipGitHub'
import TooltipLink from './TooltipLink'

export default function Project(props) {
  const project = props.project
  const tags = project.tags

  return (
    <div className='flex flex-col my-8 rounded-lg bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:flex-row'>
      <div className='flex items-center w-3/4 mb-8'>
        <div className='flex flex-col justify-between p-4'>
          <div className='flex items-center mx-4 my-4'>
            <Image src={project.icon} alt={project.title} width={42} height={42}/>
            <h5 className='ml-2 text-2xl font-bold tracking-tight text-white'>{project.title}</h5>
          </div>
          <p className='mb-3 font-normal text-gray-400'>{project.description}</p>
          <div className='flex flex-wrap my-2'>
            {tags.map((tag) => (
              <Tag tagName={tag} />
            ))}
          </div>
          <div className='flex'>
            <TooltipGitHub githubLink={project.github}/>
            <TooltipLink text={project.linkText} link={project.url}/>
          </div>
        </div>
      </div>
      <div className='relative w-3/5 h-auto'>
      <Link href={project.url} passHref={true}>
        <a target="_blank" className='px-2'>
          <Image src={project.image} alt={project.title} className='md:rounded-none md:rounded-r-lg' width={854} height={480}/>
        </a>
      </Link>
      </div>
    </div>
  )
}


