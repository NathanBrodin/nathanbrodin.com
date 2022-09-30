
export default function Tag(props) {
  return (
    <div>
        <button type="button" class="  border  focus:outline-none  focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-700 text-white border-gray-600 hover:bg-gray-600 hover:border-gray-600">{props.tagName}</button>
    </div>
  )
}