import useTranslation from "next-translate/useTranslation"
import GitHub from '../public/icons/github.svg'
import Link from 'next/link'
import { Popover, Transition } from "@headlessui/react"
import { useState } from "react"

export default function TooltipGitHub(props) {
    const { t } = useTranslation('projects')
    const [isShowing, setIsShowing] = useState(false)

    function handleClick() {
        window.open(props.link, '_blank')
    }

  return (
    <Popover className="relative">
        <Popover.Button className="px-2 py-2 focus:outline-none" onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} onClick={handleClick}>
            <Link href={props.link}>
                <a target="_blank">
                    <GitHub className='w-6 h-6 stroke-2 fill-transparent stroke-gray-300'/>
                </a>
            </Link>
        </Popover.Button>
        <Transition
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">    
            <Popover.Panel className="absolute left-1/2 z-10 -translate-x-1/2 transform">
                <div className="px-3 py-2 bg-gray-700 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-white whitespace-nowrap">{t('view_on_github')}</p>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
  )
}
