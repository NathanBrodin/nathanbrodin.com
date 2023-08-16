import About from "./components/section/about/about";
import Contact from "./components/section/contact/contact";
import Home from "./components/section/home/home";
import Projects from "./components/section/projects/projects";

export default function Page() {
  return (
    <main className="relative flex grow flex-col">
      <Home />
      <div className="px-4 md:px-6 flex flex-col justify-center items-center content-center">
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
