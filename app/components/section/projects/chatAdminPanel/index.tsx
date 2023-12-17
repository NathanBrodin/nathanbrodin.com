import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function ChatAdminPanel() {
  return (
    <ProjectCard
      year="2023"
      projectType="Work project at DNB"
      projectName="Chat Admin Panel"
      description={`An internal tool for AI customization in DNB's chatbots. 
      I developed the Frontend using React, Redux, and styled-components, integrated it with backend guidance from my mentor. I deployed it on AWS (S3, CloudFormation, CloudFront, etc.), I automated it with AWS CDK and Gitlab, and ensured quality with Cypress tests.`}
      stack={[
        "React.js",
        "Redux",
        "Styled Component",
        "AWS + CDK",
        "GitLab CI/CD",
      ]}
    />
  );
}
