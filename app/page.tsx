import About from "./components/section/about/about";
import Contact from "./components/section/contact/contact";
import Home from "./components/section/home/home";
import Projects from "./components/section/projects/projects";

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <Home />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
