import Footer from "./Footer"
import Nav from "./Nav"
import ScrollToTop from "./ScrollToTop"

export default function Layout({ children }) {
  return (
    <div>
      <Nav/>
        {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}
