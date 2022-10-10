import useTranslation from "next-translate/useTranslation"
import GitHub from '../public/icons/github.svg'
import Link from 'next/link'

export default function TooltipGitHub(props) {
    const { t } = useTranslation('projects')

  return (
    <div className="px-2 py-2 z-50">
        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button">
            <Link href={props.link}>
                <a target="_blank">
                    <GitHub className='w-6 h-6 stroke-2 fill-transparent stroke-gray-300'/>
                </a>
            </Link> 
        </button>
        <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip1 tooltip" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
            {t('view_on_github')}
            <div className="tooltip-arrow tooltip2" data-popper-arrow=""></div>
        </div>
    </div>
  )
}
