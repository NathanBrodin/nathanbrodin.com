import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function ChatAdminPanel() {
  return (
    <ProjectCard
      year="2023"
      projectType="Work project at DNB"
      projectName="Chat Admin Panel"
      description={`
        A new internal tool allowing AI trainers and managers to customize various elements across DNB's chatbots. 
        My role involved:
        - Developing from scratch the frontend of the website using React, Redux, and styled-components, in line with UX/UI designs provided through Figma.
        - Collaborating with my mentor to integrate the frontend with the backend, ensuring a seamless user experience.
        - Handling the complete deployment process on AWS, including S3, CloudFormation, CloudFront, Route53, Certificate Manager, and Firewall.
        - Automation using AWS CDK and Gitlab pipelines.
        - Writing and executing Cypress tests to maintain the quality and integrity of the application.`}
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
