import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

import Android from "../public/skills/android.svg";
import C from "../public/skills/c.svg";
import Csharp from "../public/skills/csharp.svg";
import Css from "../public/skills/css.svg";
import Firebase from "../public/skills/firebase.svg";
import Html from "../public/skills/html.svg";
import Illustrator from "../public/skills/illustrator.svg";
import Indesign from "../public/skills/indesign.svg";
import Javascript from "../public/skills/javascript.svg";
import Kotlin from "../public/skills/kotlin.svg";
import NextJS from "../public/skills/nextJS.svg";
import Photoshop from "../public/skills/photoshop.svg";
import Python from "../public/skills/python.svg";
import ReactJS from "../public/skills/reactJS.svg";
import Sql from "../public/skills/sql.svg";
import Tailwindcss from "../public/skills/tailwindcss.svg";

export default function Skills() {
  return (
    <div className='w-full sm:mx-16 bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl sm:rounded-3xl'>
      <Tab.Group>
        <Tab.List className="flex px-2 py-2 w-full justify-around items-center">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'bg-primary-500 outline-0' : 'text-white'} font-medium px-2 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-base w-full h-full`}>
                Software Development
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'bg-primary-500 outline-0' : 'text-white'} font-medium px-2 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-base w-full h-full`}>
                Frontend Development
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'bg-primary-500 outline-0' : 'text-white'} font-medium px-2 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-base w-full h-full`}>
                Backend Development
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={`${selected ? 'bg-primary-500 outline-0' : 'text-white'} font-medium px-2 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-base w-full h-full`}>
                Design
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-full  bg-background-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-6">
          <Tab.Panel>
            <div className='grid grid-cols-4 sm:grid-cols-8 gap-4'>
              <div className='flex flex-col justify-center items-center'>
                <C className="w-12 h-12 sm:w-24 sm:h-24"/>
                <p className='font-medium text-xs sm:text-base'>C</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Csharp className="w-12 h-12 sm:w-24 sm:h-24"/>
                <p className='font-medium text-xs sm:text-base'>C#</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Python className="w-12 h-12 sm:w-24 sm:h-24"/>
                <p className='font-medium text-xs sm:text-base'>Python</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Kotlin className="w-12 h-12 sm:w-24 sm:h-24"/>
                <p className='font-medium text-xs sm:text-base'>Kotlin</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Android className="w-12 h-12 sm:w-24 sm:h-24"/>
                <p className='font-medium text-xs sm:text-base'>Android</p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='grid grid-cols-4 sm:grid-cols-8 gap-4'>
                <div className='flex flex-col justify-center items-center'>
                  <ReactJS className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>React.js</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                  <NextJS className="w-10 h-10 sm:w-20 sm:h-20 mt-1 sm:mt-2"/>
                  <p className='font-medium text-xs sm:text-base'>Next.js</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Html className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>HTML</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Css className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>CSS</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Javascript className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>Javascript</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Tailwindcss className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>Tailwindcss</p>
                </div>
              </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='grid grid-cols-4 sm:grid-cols-8 gap-4'>
                <div className='flex flex-col justify-center items-center'>
                  <Firebase className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>Firebase</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Sql className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>SQL</p>
                </div>
              </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className='grid grid-cols-4 sm:grid-cols-8 gap-4'>
                <div className='flex flex-col justify-center items-center'>
                  <Photoshop className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>Photoshop</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Indesign className="w-12 h-12 sm:w-24 sm:h-24"/>
                  <p className='font-medium text-xs sm:text-base'>Indesign</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                  <Illustrator className="w-10 h-10 sm:w-20 sm:h-20 mt-1 sm:mt-2"/>
                  <p className='font-medium text-xs sm:text-base'>Illustrator</p>
                </div>
              </div>
          </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    </div>
  )
}
