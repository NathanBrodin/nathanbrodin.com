import About from "./components/section/about/about";
import Contact from "./components/section/contact/contact";
import Home from "./components/section/home/home";
import Projects from "./components/section/projects/projects";

export default function Page() {
  return (
    <main className="relative flex grow flex-col">
      <Home />
      <div className="flex flex-col content-center items-center justify-center px-4 md:px-6">
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
