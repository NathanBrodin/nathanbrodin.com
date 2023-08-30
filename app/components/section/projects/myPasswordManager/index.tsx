import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function MyPasswordManager() {
  return (
    <ProjectCard
      projectName="My Password Manager"
      projectType="Personal project"
      year="2022"
      description="My Password Manager is a Chrome extension to store, autofill, and submit your information to any website. 
      Every bit of data is encrypted using AES and stored in the Firebase Firestore database. Rated 5/5 on the Chrome Web Store."
      stack={["React.js", "Firebase", "CSS"]}
      repoLink="https://github.com/NathanBrodin/MyPasswordManager"
    ></ProjectCard>
  );
}
