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
    <section className="h-screen flex content-center" id='home'>
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-sm font-bold tracking-tight leading-none md:text-sm xl:text-lg text-primary-700">
              {t('home_title')}</h1>
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-7xl text-white">
              {t('home_name')}</h1>
            <h1 className="max-w-4xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-400">
              {t('home_subtitle')}</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              {t("home_subheading", {age: age})} <Link href={"https://www.esiea.fr"} passHref={true}><a target="_blank" className='text-primary-500 hover:underline'>ESIEA</a></Link>.<br></br> {t("home_opportunity")}</p>
            <Link href="#projects" scroll={false} >
              <a className="group inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900">
                Get started
                <Arrow className='w-5 h-5 ml-2 -mr-1 group-hover:rotate-90 transition-all'/>
              </a>
            </Link>
        </div>            
      </div>
    </section>
  )
}
