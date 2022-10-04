
export default function Tag(props) {
  return (
    <div>
        <button type="button" className="cursor-default focus:outline-none  focus:ring-4  font-medium rounded-full text-sm px-4 py-1.5 mr-2 mb-2 bg-primary-900 text-white  hover:bg-primary-600">{props.tagName}</button>
    </div>
  )
}
