import { Icon } from "@iconify/react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="tabcontent" id="projects">
      <h1 className="p-5 m-6 text-4xl font-bold text-center">PROJECTS</h1>
      <div className="flex flex-wrap pcontainer">
        {projects.map((project) => (
          <div className="card">
            <div className="card-header">
              <Image
                src={project.image}
                loading="lazy"
                width={300}
                height={290}
                alt="project screenshot"
              />
            </div>
            <div className="card-body">
              <span className="flex items-center justify-center w-full gap-3">
                {project.logos.map((devicon) => (
                  <Icon icon={devicon} width="30" height="30" />
                ))}
              </span>
              <h4>{project.title}</h4>
              <p className="mb-1 text-center font-serifs">
                {project.description}
              </p>
              <div className="flex items-center justify-between w-full">
                <abbr title="github">
                  <a href={project.github}>
                    <Icon
                      icon="akar-icons:github-fill"
                      width={23}
                      height={23}
                    />
                  </a>
                </abbr>
                <abbr title="preview">
                  <a href={project.preview}>
                    <Icon icon="ic:outline-preview" width={25} height={25} />
                  </a>
                </abbr>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
