import Footer from "./Footer"
import Nav from "./Nav"
import ScrollToTop from "./ScrollToTop"
import styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <div className={styles.nav}>
        <Nav />
      </div>
        {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}
