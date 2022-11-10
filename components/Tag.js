
export default function Tag(props) {
  return (
    <div>
        <button type="button" className="cursor-default focus:outline-none font-medium text-xs sm:text-sm px-4 py-1.5 mr-2 mb-2 text-white bg-primary-300/60  border border-neutral-400 p-8 rounded-lg  hover:bg-primary-500 hover:border-neutral-300">{props.tag}</button>
    </div>
  )
}
