"use client";

import RadialGradientCard from "./RadialGradientCard";
import { Layers, Github, Gitlab } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  year?: string;
  projectType?: string;
  projectName?: string;
  description?: string;
  repoLink?: string;
  stack?: string[];
}

interface RepoInfos {
  stars: number;
  forks: number;
}

async function FetchRepoInfos(repoURL: string) {
  if (repoURL.includes("github")) {
    const [owner, repo] = repoURL.split("github.com/")[1].split("/");
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    const data = await response.json();

    return { stars: data.stargazers_count, forks: data.forks };
  }
}

export default function ProjectCard({
  year,
  projectType,
  projectName,
  description,
  repoLink,
  stack,
}: ProjectCardProps) {
  const repoType = repoLink?.includes("github") ? "GitHub" : "GitLab";

  const [repoInfos, setRepoInfos] = useState<RepoInfos>();

  useEffect(() => {
    FetchRepoInfos(repoLink!).then((res) => {
      setRepoInfos(res);
    });
  }, [repoLink]);

  return (
    <RadialGradientCard>
      <div>
        <h3 className="text-base font-semibold leading-7 text-primary">
          {year} | {projectType}
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
            {projectName}
          </span>
        </div>
        <p className="mt-6 mb-10 text-base leading-7 text-gray-500">
          {description}
        </p>
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center mb-2 ">
              <Layers className="text-secondary" />
              <h3 className="text-base font-semibold leading-7 text-primary">
                Teck stack
              </h3>
            </div>
            <div>
              {stack?.map((item, index) => {
                return (
                  <div
                    className="flex gap-2 items-center hover:translate-x-2 transition-all "
                    key={index}
                  >
                    <div className="w-0.5 h-4 bg-gradient-to-b from-primary to-secondary rounded-sm"></div>
                    <div className="font-medium">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {repoLink && (
            <Link href={repoLink} className="flex flex-col items-end sm:mr-8">
              <div className="flex gap-2 items-center mb-2">
                {repoType === "GitHub" ? (
                  <Github className="text-secondary" />
                ) : (
                  <Gitlab className="text-secondary" />
                )}
                <h3 className="text-base font-semibold leading-7 text-primary">
                  View this repo
                </h3>
              </div>
              {repoInfos && repoInfos.stars > 2 && (
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    <svg height="16" viewBox="0 0 16 16" width="16">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <div className="font-medium">{repoInfos?.stars}</div>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <svg height="16" viewBox="0 0 16 16" width="16">
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                    <div className="font-medium">{repoInfos?.forks}</div>
                  </div>
                </div>
              )}
            </Link>
          )}
        </div>
      </div>
    </RadialGradientCard>
  );
}
