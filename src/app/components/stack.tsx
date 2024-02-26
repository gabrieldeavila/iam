import UnderlineLink from "@/components/links/UnderlineLink";
import React from "react";
import NodeLogo from "../icons/node";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import {
  SiAdobephotoshop,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGitAlt, FaLaravel, FaNodeJs, FaPhp } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandDocker, TbBrandVscode } from "react-icons/tb";

function Stack() {
  return (
    <section className="relative z-10 flex flex-col justify-center  min-h-screen bg-stone-800 text-white">
      <div className="py-5 mx-10 flex flex-col items-center justify-center gap-5">
        {/* phrase */}
        <h3 className="text-base font-light uppercase text-slate-400 text-center">
          It doesn't matter what you use, as long as you know how to use it.
        </h3>
        {/* stack */}
        <h2>Stack and Tools</h2>
        <div className="flex max-w-4xl flex-col items-center gap-2.5">
          <p className="text-center">
            My main stack is based on <strong>React</strong> and{" "}
            <strong>Typescript</strong>, with <strong>Next.js</strong> as the
            main framework.
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

        <div className="mt-5 stack-icons flex max-w-5xl flex-wrap justify-between gap-10">
          <div className="flex flex-col items-center gap-2.5">
            <IoLogoJavascript color="white" size={100} />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <IoLogoReact color="white" size={100} />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <SiTypescript color="white" size={100} />
            <p>Typescript</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <SiNextdotjs color="white" size={100} />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <SiTailwindcss color="white" size={100} />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <SiStyledcomponents color="white" size={100} />
            <p>Styled Components</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <FaNodeJs color="white" size={100} />
            <p>Node</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <GrGraphQl  color="white" size={100} />
            <p>Graph Ql</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <FaPhp color="white" size={100} />
            <p>php</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <FaLaravel color="white" size={100} />
            <p>Laravel</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <TbBrandVscode color="white" size={100} />
            <p>VsCode</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <FaGitAlt color="white" size={100} />
            <p>git</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <TbBrandDocker color="white" size={100} />
            <p>Docker</p>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <SiAdobephotoshop color="white" size={100} />
            <p>Photoshop</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
