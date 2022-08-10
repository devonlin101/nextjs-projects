import { Icon } from "@iconify/react";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="tabcontent" id="projects">
      <h1 className="p-5 m-6 text-4xl font-bold text-center">PROJECTS</h1>
      <div className="flex flex-wrap pcontainer">
        <div className="card">
          <div className="card-header">
            <Image src="/portfolio.png" width={300} height={290} alt="rover" />
          </div>
          <div className="card-body">
            <span className="flex items-center justify-center w-full gap-3">
              <Icon icon="logos:nextjs-icon" width={30} height={30} />
              <Icon icon="logos:tailwindcss-icon" width={30} height={30} />
            </span>
            <h4>Portfolio -- Kevin Lin</h4>
            <p className="mb-1 text-center font-serifs">
              A simple portfolio website built with nextjs and tailwindcss
            </p>
            <div className="flex items-center justify-between w-full">
              <abbr title="github">
                <a href="https://github.com/devonlin101/nextjs-projects/tree/master/portfolio-next">
                  <Icon icon="akar-icons:github-fill" width={23} height={23} />
                </a>
              </abbr>
              <abbr title="preview">
                <a href="https://kevinlin01.vercel.app/">
                  <Icon icon="ic:outline-preview" width={25} height={25} />
                </a>
              </abbr>
            </div>
          </div>
        </div>
        <div className="max-w-sm overflow-hidden rounded shadow-lg card">
          <div className="w-full card-header">
            <img
              src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
              alt="ballons"
            />
          </div>
          <div className="px-6 py-4 card-body">
            <span className="tag tag-purple">Popular</span>
            <h4>How to Keep Going When You Don’t Know What’s Next</h4>
            <p className="font-serifs">
              The future can be scary, but there are ways to deal with that
              fear.
            </p>
            <div className="user">
              <img
                src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                alt="user"
              />
              <div className="user-info">
                <h5>Eyup Ucmaz</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img
              src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
              alt="city"
            />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Design</span>
            <h4>10 Rules of Dashboard Design</h4>
            <p className="font-serifs">Dashboard Design Guidelines</p>
            <div className="user">
              <img
                src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
                alt="user"
              />
              <div className="user-info">
                <h5>Carrie Brewer</h5>
                <small>1w ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
