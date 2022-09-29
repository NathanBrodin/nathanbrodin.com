import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
import Arrow from '../public/arrow.svg';

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
    <section className="flex content-center h-screen" id='home'>
      <div className="relative z-10 grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-4xl mb-4 text-sm font-bold leading-none tracking-tight md:text-sm xl:text-lg text-primary-700">
              {t('home_title')}</h1>
            <h1 className="max-w-4xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl xl:text-7xl">
              {t('home_name')}</h1>
            <h1 className="max-w-4xl mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-400 md:text-5xl xl:text-6xl">
              {t('home_subtitle')}</h1>
            <p className="max-w-4xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              {t("home_subheading", {age: age})} <Link href={"https://www.esiea.fr"} passHref={true}><a target="_blank" className='text-primary-500 hover:underline'>ESIEA</a></Link>.<br></br> {t("home_opportunity")}</p>
            <Link href="#projects" scroll={false} >
              <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg group bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900">
                {t("home_get_started")}
                <Arrow className='w-5 h-5 ml-2 -mr-1 transition-all group-hover:rotate-90'/>
              </a>
            </Link>
        </div>            
      </div>
      <div className='absolute px-4 mx-auto bg-red-300 w-screen-xl h-screen-xl lg:gap-8 xl:gap-0 lg:grid-cols-12'>

      </div>
    </section>
  )
}
