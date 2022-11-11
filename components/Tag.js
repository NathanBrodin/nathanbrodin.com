export default function Tag(props) {
  return (
    <div>
      <button
        type="button"
        className="mr-2 mb-2 cursor-default rounded-lg border border-neutral-400 bg-primary-300/60 p-8 px-4 py-1.5 text-xs  font-medium text-white hover:border-neutral-300 hover:bg-primary-500  focus:outline-none sm:text-sm"
      >
        {props.tag}
      </button>
    </div>
  );
}
