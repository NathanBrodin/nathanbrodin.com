import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
import Arrow from '../../public/icons/arrow.svg'
import Aos from "aos";
import "aos/dist/aos.css";

import Blob1 from "../../public/blobs/blob1.svg";
import Blob2 from "../../public/blobs/blob2.svg";
import Blob3 from "../../public/blobs/blob3.svg";

export default function Home() {
  const { t } = useTranslation('home')
  let age = getMyAge()
  
  function getMyAge() {
    let birthDate = new Date('2002-07-07');
    let ageDifMs = Date.now() - birthDate.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <section className="relative flex items-center justify-between h-[110vh] bg-background-900 home-clip-phone sm:home-clip" id='home'>
      <div className="relative z-10 mx-8 sm:mx-32">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-2 text-xs sm:text-lg font-bold text-gray-400">
              {t('home_title')}</h1>
            <h1 className="mb-2 text-4xl sm:text-7xl font-black text-white">
              {t('home_name')}</h1>
            <h1 className="mb-8 text-3xl sm:text-6xl font-extrabold text-gradient bg-gradient-to-r from-gradient-start to-gradient-end">
              {t('home_subtitle')}</h1>
            <p className="mb-6 text-lg sm:text-xl font-light text-gray-400">
              {t("home_subheading", {age: age})} <Link href={"https://www.esiea.fr"} passHref={true}><a target="_blank" className='text-primary-200 hover:underline'>ESIEA</a></Link>.<br></br> {t("home_opportunity")}</p>
            <Link href="#projects" scroll={false} >
              <a  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full bg-gradient-start blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 rounded-full bg-gradient-middle blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 rounded-full bg-gradient-end blur-md"></span>
                </span>
                <span className="relative flex items-center text-white">
                  {t("home_get_started")}
                  <Arrow className='w-5 h-5 ml-2 -mr-1 transition duration-700 group-hover:rotate-90'/>
                </span>
              </a>
            </Link>
        </div>            
      </div>
      <div className='absolute w-full h-full opacity-50 home-bg' />
      <div className="absolute w-32 h-32 right-0 mr-12 sm:w-96 sm:h-96 sm:mr-28">
        <Blob1 className="absolute text-gradient-start fill-current top-0 -left-10 filter blur-xl opacity-70 animate-blob"/>
        <Blob2 className="absolute text-gradient-middle fill-current self-center filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
        <Blob3 className="absolute text-gradient-end fill-current -bottom-8 left-20 filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
    </div>
    </section>
  )
}
