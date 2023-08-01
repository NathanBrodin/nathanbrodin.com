import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function GrammarChecker() {
  return (
    <div>
      <ProjectCard
        year="2021"
        projectType="Personal project"
        projectName="Grammar Checker"
        description="I developed a grammar correction tool using the GPT-3 API, inspired by
          Quillbot's UI. Built with Next.js and TailwindCSS, my application
          is fully responsive, features light/dark modes, and puts a personal
          twist on the traditional design, demonstrating my front-end
          engineering and AI integration skills."
        stack={["Next.js", "Tailwind CSS"]}
        repoLink="https://github.com/NathanBrodin/grammar-checker"
      />
    </div>
  );
}
