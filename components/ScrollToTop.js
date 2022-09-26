import Image from 'next/image'
import upArrow from '../public/up-arrow.svg';

export default function ScrollToTop() {

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
       });
    }

    return (
        <div className="fixed bottom-0 right-0 mr-4 mb-6">
            <button type="button" onClick={handleClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <div class="w-5 h-5 -rotate-90">
            <Image src={upArrow} alt="Scroll to top" width={20} height={20} layout="fill"/>
            </div>
        </button>
      </div>
      )
}
