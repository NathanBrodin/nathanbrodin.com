import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import En from '../public/flags/en.svg'
import Fr from '../public/flags/fr.svg'

export default function LanguageDropdown() {
    const router = useRouter()
    const locale = router.locale

  return (
    <div className="flex justify-end p-2 mr-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="sm:hidden inline-flex justify-center w-ful py-2 text-gray-300 text-xs bg-black bg-opacity-0 rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            { locale === "en" ? "En" : "Fr" }
          </Menu.Button>
          <Menu.Button className="hidden sm:inline-flex justify-center w-full px-4 py-2 text-gray-300 text-sm bg-black bg-opacity-0 rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            { locale === "en" ? "English" : "Français" }
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-neutral-700 glass-bg border border-neutral-700 rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={router.asPath} locale={"en"}>
                      <a href='' className='group flex w-full items-center'>
                        <En className="w-5 h-5 mr-2" aria-hidden="true"/>
                        English
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-primary-500' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <Link href={router.asPath} locale={"fr"}>
                      <a href='' className='group flex w-full items-center'>
                        <Fr className="w-5 h-5 mr-2" aria-hidden="true"/>
                        Français
                      </a>
                    </Link>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}