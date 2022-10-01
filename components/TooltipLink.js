import Play from '../public/icons/play.svg'
import Link from 'next/link'

export default function TooltipLink(props) {
  return (
    <div className="px-2 py-2">
        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button">
            <Link href={props.link} passHref={true}>
                <a target="_blank">
                    <Play className='w-6 h-6 stroke-2 fill-transparent stroke-primary-200'/>
                </a>
            </Link> 
            </button>
                <div id="tooltip-bottom" role="tooltip" class="tooltip1 inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip bg-primary-200" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    {props.text}
                    <div class="tooltip-arrow tooltip2" data-popper-arrow=""></div>
                </div>
    </div>
  )
}
