import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import MyPasswordManager from '../public/projects/MyPasswordManager.png'
import TooltipGitHub from './TooltipGitHub'
import TooltipLink from './TooltipLink'

export default function Project(props) {
  const project = props.project

  return (
    <div className='flex flex-col my-4 bg-gray-800 border border-gray-700 rounded-lg md:flex-row'>
      <div className='flex items-center w-3/4 mb-8'>
        <div className='flex flex-col justify-between p-4'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>My Password Manager</h5>
          <p className='mb-3 font-normal text-gray-400'>A password manager made with React and Firebase</p>
          <div className='flex flex-wrap'>
            <Tag tagName='React.js'/>
            <Tag tagName='Firebase'/>
            <Tag tagName='Javascript'/>   
          </div>
          <div className='flex'>
            <TooltipGitHub githubLink="https://google.com"/>
            <TooltipLink text='View on Chrome web store' link='https://google.com'/>
          </div>
        </div>
      </div>
      <div>
      <Link href={"https://github.com/NathanBrodin/nathanbrodin.com"} passHref={true}>
        <a target="_blank" className='px-2'>
          <Image src={MyPasswordManager} alt="MyPasswordManager" className='h-full md:rounded-none md:rounded-r-lg'/>
        </a>
      </Link>
      </div>
    </div>
  )
}


