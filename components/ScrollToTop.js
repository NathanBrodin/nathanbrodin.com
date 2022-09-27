import { useEffect } from 'react';
import Arrow from '../public/arrow.svg';

export default function ScrollToTop() {

    useEffect(() =>{
        window.addEventListener('scroll', checkScrollTop);
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [])

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
       });
    }

    function checkScrollTop() {
        if (window.scrollY > 200) {
            document.getElementById('scroll-to-top').style.display = 'block';
        } else {
            document.getElementById('scroll-to-top').style.display = 'none';
        }
        
    }

    return (
        <div className="fixed bottom-0 right-0 mr-4 mb-6 hidden" id="scroll-to-top">
            <button type="button" onClick={handleClick} className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">
            <Arrow className="w-5 h-5 -rotate-90"/>
        </button>
      </div>
      )
}
