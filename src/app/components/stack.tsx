import UnderlineLink from "@/components/links/UnderlineLink";
import React from "react";
import NodeLogo from "../icons/node";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiAdobephotoshop, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGitAlt, FaLaravel, FaNodeJs, FaPhp } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandDocker, TbBrandVscode } from "react-icons/tb";

function Stack() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-5 bg-stone-800 text-white ">
      {/* phrase */}
      <h3 className="text-base font-light uppercase text-slate-400">
        It doesn't matter what you use, as long as you know how to use it.
      </h3>
      {/* stack */}
      <h2>Stack and Tools</h2>
      <div className="flex max-w-4xl flex-col items-center gap-2.5">
        <p className="text-center">
          My main stack is based on <strong>React</strong> and{" "}
          <strong>Typescript</strong>, with <strong>Next.js</strong> as the main
          framework.
        </p>

        <p className="text-center">
          I also use <strong>TailwindCSS</strong> or{" "}
          <strong>Styled Components</strong> for styling and{" "}
          <strong>Node.js</strong> for server-side logic.
        </p>

        <p className="text-center">
          Therefore, I am also familiar with <strong>Express</strong> and{" "}
          <strong>GraphQL</strong>, and I have experience with{" "}
          <strong>PostgreSQL</strong> and <strong>MongoDB</strong> databases.
        </p>

        <p className="text-center">
          Visit my{" "}
          <UnderlineLink
            className="animated-yellow text-yellow-600"
            href="https://www.linkedin.com/in/gabriel-e-avila/"
          >
            LinkedIn
          </UnderlineLink>{" "}
          for more details.
        </p>
      </div>

      <div className="flex justify-between flex-wrap gap-10 max-w-5xl mt-5">
        <div className="flex flex-col gap-2.5 items-center">
          <IoLogoJavascript color="white" size={100} />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <IoLogoReact color="white" size={100} />
          <p>React</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <SiTypescript color="white" size={100} />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <SiNextdotjs color="white" size={100} />
          <p>Next.js</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <SiTailwindcss color="white" size={100} />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <SiStyledcomponents color="white" size={100} />
          <p>Styled Components</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <FaNodeJs color="white" size={100} />
          <p>Node</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <GrGraphQl color="white" size={100} />
          <p>Graph Ql</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <FaPhp color="white" size={100} />
          <p>php</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <FaLaravel color="white" size={100} />
          <p>Laravel</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <TbBrandVscode color="white" size={100} />
          <p>VsCode</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <FaGitAlt color="white" size={100} />
          <p>git</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <TbBrandDocker color="white" size={100} />
          <p>Docker</p>
        </div>
        <div className="flex flex-col gap-2.5 items-center">
          <SiAdobephotoshop color="white" size={100} />
          <p>Photoshop</p>
        </div>
      </div>
    </section>
  );
}

export default Stack;
