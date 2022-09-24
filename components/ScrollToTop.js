
export default function ScrollToTop() {

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
       });
    }

    return (
        <div>
            <button onClick={handleClick}>Return to top</button>
        </div>
      )
}
