import Play from '../public/icons/play.svg'
import Link from 'next/link'

export default function TooltipLink(props) {
  return (
    <div className="px-2 py-2 z-50">
        <button data-tooltip-target="tooltip-bottom2" data-tooltip-placement="bottom" type="button">
            <Link href={props.link} passHref={true}>
                <a target="_blank">
                    <Play className='w-6 h-6 stroke-2 fill-transparent stroke-primary-200'/>
                </a>
            </Link> 
            </button>
                <div id="tooltip-bottom2" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white rounded-lg shadow-sm opacity-0 tooltip1 tooltip bg-primary-200" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    {props.text}
                    <div className="tooltip-arrow tooltip2" data-popper-arrow=""></div>
                </div>
    </div>
  )
}
