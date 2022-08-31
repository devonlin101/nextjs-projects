import { Icon } from "@iconify/react";
import { skillsets } from "../data/skillsets";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full px-2 text-center item-center ">
      <div>
        <div className="p-5 m-6 text-4xl font-black">Kevin Lin</div>
        <div className="m-2 italic">web developer</div>

        <div className="p-5 m-5 rounded-full">
          <Image
            className="rounded-full"
            src="/kevinlin0.jpeg"
            width="220"
            height="220"
          />
        </div>
      </div>
      <div className="flex justify-center iterm-center">
        <div className="p-3 grid gap-4 grid-cols-6 w-96 place-items-center">
          {skillsets.map((skillset) => (
            <abbr title={skillset.title}>
              <a href={skillset.link}>
                <Icon icon={skillset.icon} width="30" height="30" />
              </a>
            </abbr>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-2 mt-6 iterm-center gap-3 social">
        <abbr title="github">
          <a href="https://github.com/devonlin101">
            <Icon icon="akar-icons:github-fill" width="25" height="25" />
          </a>
        </abbr>
        <abbr title="leetcode">
          <a href="https://leetcode.com/devonlin/">
            <Icon icon="cib:leetcode" width="25" height="25" />
          </a>
        </abbr>
      </div>
    </div>
  );
}
