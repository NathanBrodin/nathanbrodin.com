import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function ChatAdminPanel() {
  return (
    <ProjectCard
      year="2023"
      projectType="Work project at DNB"
      projectName="Chat Admin Panel"
      description="I developped an app to give manager's the ability to configure DNB's chatbot websites"
      stack={[
        "React.js",
        "Redux",
        "Styled Component",
        "AWS",
        "GitLab CI/CD",
        "AWS CDK",
        "Sceptre",
      ]}
    />
  );
}
