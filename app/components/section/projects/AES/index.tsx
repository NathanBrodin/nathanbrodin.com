import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function AES() {
  return (
    <ProjectCard
      projectName="AES 256"
      year="2020"
      projectType="School project"
      description="bla bla bla"
      stack={["C", "Cryptography"]}
    />
  );
}
