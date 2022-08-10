import { Icon } from "@iconify/react";
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
          <abbr title="HTML5">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
              <Icon icon="vscode-icons:file-type-html" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="markdown" className="">
            <a href="https://www.markdownguide.org/">
              <Icon icon="logos:markdown" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="css3" className="">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <Icon icon="vscode-icons:file-type-css" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="sass" className="">
            <a href="https://sass-lang.com/">
              <Icon icon="logos:sass" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="tailwind css" className="">
            <a href="https://tailwindcss.com/">
              <Icon icon="logos:tailwindcss-icon" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="javascript">
            <a href="https://www.javascript.com/">
              <Icon icon="logos:javascript" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="typescript" className="">
            <a href="https://www.typescriptlang.org/">
              <Icon icon="logos:typescript-icon" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="reactjs" className="">
            <a href="https://reactjs.org/">
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="30"
                height="30"
              />
            </a>
          </abbr>
          <abbr title="nextjs" className="">
            <a href="https://nextjs.org/">
              <Icon icon="logos:nextjs-icon" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="vuejs" className="float-right">
            <a href="https://vuejs.org/">
              <Icon icon="logos:vue" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="prisma ORM" className="float-right">
            <a href="https://www.prisma.io/">
              <Icon icon="logos:prisma" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="mongodb database" className="float-right">
            <a href="https://www.mongodb.com/">
              <Icon icon="logos:mongodb-icon" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="postgresql database" className="float-right">
            <a href="https://www.postgresql.org/">
              <Icon icon="logos:postgresql" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="firebase database" className="float-right">
            <a href="https://firebase.google.com/">
              <Icon icon="logos:firebase" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="linux os" className="float-right">
            <a href="https://www.linux.org/">
              <Icon icon="flat-color-icons:linux" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="git version control" className="float-right">
            <a href="https://git-scm.com/">
              <Icon icon="bi:git" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="bash script" className="float-right">
            <a href="https://www.tutorialspoint.com/unix/shell_scripting.htm">
              <Icon icon="logos:bash-icon" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="nodejs-javaScript rumtime" className="float-right">
            <a href="https://nodejs.org/en/">
              <Icon icon="logos:nodejs" width="30" height="30" />
            </a>
          </abbr>
          <abbr title="rust programming language" className="float-right">
            <a href="https://www.rust-lang.org/learn">
              <Icon
                icon="vscode-icons:file-type-light-rust"
                width="30"
                height="30"
              />
            </a>
          </abbr>
          <abbr title="webassembly">
            <a href="https://webassembly.org/">
              <Icon icon="logos:webassembly" width="30" height="30" />
            </a>
          </abbr>
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
