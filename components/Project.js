import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import TooltipGitHub from './TooltipGitHub'
import TooltipLink from './TooltipLink'

export default function Project(props) {
  const project = props.project
  const tags = project.tags

  return (
    <div className='flex flex-col my-8 bg-gray-800 border border-gray-700 rounded-lg md:flex-row'>
      <div className='flex items-center w-3/4 mb-8'>
        <div className='flex flex-col justify-between p-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>{project.title}</h5>
          <p className='mb-3 font-normal text-gray-400'>{project.description}</p>
          <div className='flex flex-wrap'>
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
          <Image src={project.image} alt={project.title} className='md:rounded-none md:rounded-r-lg' layout='fill'/>
        </a>
      </Link>
      </div>
    </div>
  )
}


