import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function ESIEABOT() {
  return (
    <ProjectCard
      projectName="ESIEABOT Mobile app"
      projectType="School project"
      year="2022"
      description={`In association with my school robot. I took part in the development of the mobile application for the ESIEABOT robot.
      Made in Kotlin, it enables remote control of the ESIEABOT via Bluetooth.
      The app includes features such as camera feedbacks, Bluetooth auto-pairing, WiFi configuration, a help guide, and more.`}
      stack={["Kotlin", "Android", "Python"]}
      repoLink="https://github.com/PST-Esieabot/Esieabot-Mobile-App"
    ></ProjectCard>
  );
}
