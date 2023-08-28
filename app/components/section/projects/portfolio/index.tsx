import ProjectCard from "@/app/components/ui/cards/projectCard";
import WebPage from "@/app/components/ui/frame/webPage";

export default function Portfolio() {
  return (
    <ProjectCard
      projectName="Portfolio"
      projectType="Personnal project"
      description="My portfolio is a carefully curated showcase of my professional journey and past projects. 
      Developed using Next.js (React.js) with TypeScript, Tailwind CSS, and Framer Motion, it highlights my technical skills and dedication to creating interactive and visually engaging user experiences."
      year="2023"
      stack={["Next.js", "Tailwindcss", "TypeScript", "Framer motion"]}
    >
      <WebPage>
        <div className="lg:w-[800px] h-full ">
        <iframe src="/" className="h-full w-full"></iframe>
        </div>
      </WebPage>
    </ProjectCard>
  );
}
