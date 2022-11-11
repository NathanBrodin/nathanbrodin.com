import { useEffect } from "react";
import Arrow from "../public/icons/arrow.svg";

export default function ScrollToTop() {
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  }

  function checkScrollTop() {
    if (window.scrollY > 200) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }

  return (
    <div
      className="fixed bottom-0 right-0 z-50 mb-4 mr-2 hidden sm:mb-6 sm:mr-4"
      id="scroll-to-top"
    >
      <button
        type="button"
        onClick={handleClick}
        className="mr-2  inline-flex items-center rounded-lg bg-primary-600 p-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800 "
      >
        <Arrow className="h-5 w-5 -rotate-90" />
      </button>
    </div>
  );
}
