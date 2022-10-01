import useTranslation from "next-translate/useTranslation"
import GitHub from '../public/icons/github.svg'
import Link from 'next/link'

export default function TooltipGitHub(props) {
    const { t } = useTranslation('projects')

  return (
    <div className="px-2 py-2">
        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button">
            <Link href={props.githubLink}>
                <a target="_blank">
                    <GitHub className='w-6 h-6 stroke-2 fill-transparent stroke-gray-300'/>
                </a>
            </Link> 
        </button>
        <div id="tooltip-bottom" role="tooltip" class="tooltip1 inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
            {t('view_on_github')}
            <div class="tooltip-arrow tooltip2" data-popper-arrow=""></div>
        </div>
    </div>
  )
}
