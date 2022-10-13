import '../styles/globals.css'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-out',
    });

    import('flowbite')
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
