import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import TooltipGitHub from './TooltipGitHub'
import TooltipLink from './TooltipLink'

export default function Project(props) {
  const project = props.project

  return (
    <div className='gap-8'>
      <div className='grid content-between h-full'>
        <div className='relative group'>
            <div className='absolute gradient-radial -inset-[1px] rounded-lg'></div>
            <div className='absolute -inset-[1px] bg-white/[0.1] rounded-lg'></div>
            <div className='relative p-4 lg:p-8 grid gap-6 lg:gap-8 content-between bg-neutral-900 rounded-lg'>
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
                            <h1 className=' text-white font-semibold text-xl lg:text-2xl py-4 lg:my-6 group-hover:bg-gradient-to-t from-gradient-start to-gradient-end group-hover:bg-clip-text group-hover:text-transparent transition duration-300'>{project.title}</h1>
                        </a>
                    </Link>
                    <p className='text-gray-400 text-sm lg:text-base font-medium'>{project.description}</p>
                </div>
                <div className='flex flex-wrap'>
                    {project.tags.map((tag, index) => (
                        <Tag key={index} tag={tag}/>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}