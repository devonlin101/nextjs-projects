import React from "react";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import { Icon } from "@iconify/react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full p-2 m-2">
          <ul
            className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
            role="tablist"
          >
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  " text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lime-600 rounded-full sm:rounded-full"
                    : "text-lime-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Portfolio
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-orange-600 rounded-full sm:rounded-full"
                    : "text-orange-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="mr-1 text-base fas fa-cog"></i> about
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-sky-600 rounded-full sm:rounded-full"
                    : "text-sky-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="mr-1 text-base fas fa-briefcase"></i> projects
              </a>
            </li>
            <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "sm:rounded-full transition transform ease-in-out duration-300 rounded-full text-white bg-rose-600 "
                    : "text-rose-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="mr-1 text-base fas fa-briefcase"></i> contact
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col w-full mb-6 break-words bg-white rounded shadow-lg">
            <div className="flex-auto px-4 py-5">
              <div className="tab-content tab-space">
                <div
                  className={
                    "flex item-center justify-center p-3  " +
                    (openTab === 1 ? "block" : "hidden")
                  }
                  id="link1"
                >
                  <Home />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <About />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Projects />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
