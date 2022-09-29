import Footer from "./Footer"
import Nav from "./Nav"
import ScrollToTop from "./ScrollToTop"

export default function Layout({ children }) {
  return (
    <div className="text-white bg-background-900">
      <Nav />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}
