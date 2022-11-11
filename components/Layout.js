import Footer from "./sections/Footer";
import Nav from "./sections/Nav";
import ScrollToTop from "./ScrollToTop";
import Cursor from "./Cursor";

export default function Layout({ children }) {
  return (
    <div className="bg-background-900 text-white">
      <Cursor />
      <Nav />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  );
}
