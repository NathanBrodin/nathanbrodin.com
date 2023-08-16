import ProjectCard from "@/app/components/ui/cards/projectCard";
import WebPage from "@/app/components/ui/frame/webPage";

export default function Portfolio() {
  return (
    <ProjectCard
      projectName="Portfolio"
      projectType="Personnal project"
      description="I developed a grammar correction tool using the GPT-3 API, inspired by Quillbot's UI. Built with Next.js and TailwindCSS, my application is fully responsive, features light/dark modes, and puts a personal twist on the traditional design, demonstrating my front-end engineering and AI integration skills."
      year="2023"
      stack={["Next.js", "Tailwindcss", "Framer motion"]}
    >
      <WebPage>
        <div className="lg:w-[800px] h-full ">
        <iframe src="/" className="h-full w-full"></iframe>
        </div>
      </WebPage>
    </ProjectCard>
  );
}
