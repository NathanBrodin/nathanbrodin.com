"use client";

import ProjectCard from "@/app/components/ui/cards/projectCard";

export default function BmoveOn() {
    return (
        <ProjectCard
            year="2023"
            projectType="School project"
            projectName="B-moveon"
            description={`At the request of a Spanish company, I led a group of three students to develop a delivery tracking application for cargo bikes. 
          It let deliverymen track their deliveries and let the company manage their deliveries and deliverymen. 
          We use the Google Maps API to get places information and calculate the best route for the deliverymen.
          I also set up a CI/CD pipeline to automate the deployment of the application.`}
            stack={["Flutter", "Dart", "Google Maps API", "Code Magic", "GitLab CI/CD"]}
            repoLink="https://gitlab.esiea.fr/creuze/Cargo-BikePST"
        >
                <video
                    src="/b-moveon.mp4"
                    autoPlay
                    muted
                    loop
                    className="rounded-xl object-cover h-full max-h-[610px] w-full rounded-xl border border-white/10 bg-white/80 shadow-lg ring-1 ring-gray-900/5"
                />
        </ProjectCard>
    )
}