import { Icon } from "@iconify/react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio -- Kevin Lin",
    image: "/portfolio.png",
    description: "A simple portfolio website built with nextjs and tailwindcss",
    github:
      "https://github.com/devonlin101/nextjs-projects/tree/master/portfolio-next",
    preview: "https://kevinlin01.vercel.app",
    logos: ["logos:nextjs-icon", "logos:tailwindcss-icon"],
  },
  {
    title: "YouTube Clone",
    image: "/portfolio.png",
    description:
      "A simple YouTube clone website built with reactjs and styled-components",
    github:
      "https://github.com/devonlin101/nextjs-projects/tree/master/portfolio-next",
    preview: "https://kevinlin01.vercel.app",
    logos: ["vscode-icons:file-type-reactjs", "simple-icons:styledcomponents"],
  },
];
export default function Projects() {
  return (
    <div className="tabcontent" id="projects">
      <h1 className="p-5 m-6 text-4xl font-bold text-center">PROJECTS</h1>
      <div className="flex flex-wrap pcontainer">
        {projects.map((project) => (
          <div className="card">
            <div className="card-header">
              <Image src={project.image} width={300} height={290} alt="rover" />
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
