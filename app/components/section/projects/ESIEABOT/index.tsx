import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function ESIEABOT() {
  return (
    <ProjectCard
      projectName="ESIEABOT Mobile app"
      projectType="School project"
      year="2022"
      description="Coded in Kotlin, it enables remote control of the ESIEABOT robot via Bluetooth. The robot, equipped with a Raspberry Pi Zero and two motors, runs a Python program on Raspbian OS and communicates with the app via Bluetooth. 
      Additionally, the robot hosts a website to display camera feedback utilized by the app. The app includes features such as Bluetooth auto-pairing, WiFi configuration, a help guide, and more."
      stack={["Kotlin", "Android", "Python"]}
      repoLink="https://github.com/PST-Esieabot/Esieabot-Mobile-App"
    ></ProjectCard>
  );
}
