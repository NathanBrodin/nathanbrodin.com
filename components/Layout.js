import Footer from "./Footer"
import Nav from "./Nav"
import ScrollToTop from "./ScrollToTop"

export default function Layout({ children }) {
  return (
    <div className="bg-background-900 text-white">
      <Nav />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}
