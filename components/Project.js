import Tag from "./Tag";
import Image from "next/image";
import Link from "next/link";
import TooltipGitHub from "./TooltipGitHub";
import TooltipLink from "./TooltipLink";

export default function Project(props) {
  const project = props.project;

  return (
    <div className="gap-8">
      <div className="grid h-full content-between">
        <div className="group relative">
          <div className="gradient-radial absolute -inset-[1px] rounded-lg"></div>
          <div className="absolute -inset-[1px] rounded-lg bg-white/[0.1]"></div>
          <div className="relative grid content-between gap-6 rounded-lg bg-neutral-900 p-4 lg:gap-8 lg:p-8">
            <div>
              <div className="flex w-full justify-between">
                <Image
                  src={project.icon}
                  alt={project.title}
                  width={44}
                  height={44}
                />
                <div className="flex">
                  <TooltipGitHub link={project.github} />
                  <TooltipLink link={project.url} text={project.linkText} />
                </div>
              </div>
              <Link href={project.url} passHref={true}>
                <a target="_blank">
                  <h1 className=" from-gradient-start to-gradient-end py-4 text-xl font-semibold text-white transition duration-300 group-hover:bg-gradient-to-t group-hover:bg-clip-text group-hover:text-transparent lg:my-6 lg:text-2xl">
                    {project.title}
                  </h1>
                </a>
              </Link>
              <p className="text-sm font-medium text-gray-400 lg:text-base">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap">
              {project.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
