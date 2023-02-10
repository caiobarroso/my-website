/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { use, useState } from "react";
import { FaDownload, FaLink } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { isValid, isTwoClosed, isPortuguese } from "../atoms/index";
import {
  about_br,
  skills_br,
  experience_br,
  education_br,
  projects_br,
} from "../constants/ptBR";
import {
  about_us,
  skills_us,
  experience_us,
  education_us,
  projects_us,
} from "../constants/enUS";
import Terminal from "./Terminal";
import ServerError from "./ServerError";

function Main() {
  const [valid, setValid] = useRecoilState(isValid);
  const [tabTwoClosed, setTabTwoClosed] = useRecoilState(isTwoClosed);
  const [br, setBr] = useRecoilState(isPortuguese);

  var about = br ? about_br : about_us;
  var skills = br ? skills_br : skills_us;
  var experience = br ? experience_br : experience_us;
  var education = br ? education_br : education_us;
  var projects = br ? projects_br : projects_us;
  return (
    <div className="flex flex-col">
      <div className="h-[400px]">
        <Terminal />
      </div>

      {valid && !tabTwoClosed ? (
        <div>
          <div className={`flex flex-col mt-8 font-robotoRegular`}>
            <div className="flex justify-center items-center gap-4">
              <div>
                <p className="text-white text-[3.2rem] sm:text-[4rem] font-robotoBold">
                  {br ? "Sobre mim" : "About me"}
                </p>
                <div className="flex gap-4">
                  <p className="text-[#808080] text-sm sm:text-base">
                    {br ? "Baixe meu" : "Download my"}
                  </p>
                  <a
                    className="flex text-center bg-[#682ae9] px-4 rounded-full text-white justify-center items-center gap-2 text-sm"
                    href="https://drive.google.com/file/d/1mXcYBNCXnx4VAXCcYMU_JcqzFShXptAl/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CV
                    <FaDownload className="w-4 h-4" />
                  </a>
                </div>
                <h2 className="text-[#682ae9] text-xl leading-6 lg:w-[70%] mt-4">
                  {about.bio}
                </h2>
              </div>
            </div>

            <h2 className="text-base sm:text-lg text-[#808080] mt-4">
              // Javascript Fullstack Developer @ Bean Softwares
            </h2>
            <h2 className="text-base sm:text-lg text-[#808080]">
              // JS &gt;&gt;&gt;&gt;
            </h2>
          </div>
          <div className="font-robotoRegular">
            <h1 className="text-[#DBDBDB] text-xl font-extrabold mt-6 mb-4 font-robotoBold">
              {br ? "Pricipais" : "Main"} skills
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 text-[1rem] sm:text-lg text-[#808080] leading-6">
              <h2 className="">{skills.desc}</h2>
              <h2 className="">GraphQL, MongoDB, PostgreSQL, Firebase</h2>
              <h2 className="">
                JavaScript, CSS, HTML, React, React-native, Next.js, Node.js,
                Tailwindcss
              </h2>
              <h2 className="">Docker, Git</h2>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="text-[#DBDBDB] text-xl font-robotoBold mt-6 mb-4">
              {br ? "Experiência profissional" : "Work experience"}
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 text-[1rem] sm:text-lg text-[#808080] leading-6">
              {experience.map((item, index) => (
                <div key={index}>
                  <h2 className="text-[#682ae9] font-bold">{item.title}</h2>
                  <h2 className="">@ {item.place}</h2>
                  <p className="text-base">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="font-robotoRegular">
            <h1 className="text-[#DBDBDB] text-xl font-robotoBold mt-6 mb-4">
              {br ? "Formação acadêmica" : "Education"}
            </h1>

            <div className="text-[1rem] sm:text-lg">
              <h2 className="text-[#682ae9] font-bold">
                2019-2023 {education.university}
              </h2>
              <h2 className="text-[#808080]">{education.description}</h2>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="text-[#DBDBDB] text-xl font-robotoBold mt-6 mb-4">
              {br ? "Idiomas" : "Languages"}
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14">
              <div className="text-[1rem] sm:text-xl">
                <h2 className="text-[#808080]">
                  // {br ? "fluente" : "fluent"}
                </h2>
                <h2 className="text-[#682ae9] font-bold text-base mt-2">
                  pt-BR{" "}
                  <span className="text-[#808080]">
                    {br ? "Português" : "Portuguese"}
                  </span>
                </h2>
              </div>
              <div className="text-[1rem] sm:text-xl">
                <h2 className="text-[#808080]">
                  // {br ? "intermediário" : "intermediate"}
                </h2>
                <h2 className="text-[#682ae9] font-bold text-base mt-2">
                  en-US{" "}
                  <span className="text-[#808080]">
                    {br ? "Inglês" : "English"}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="text-[#DBDBDB] text-xl font-extrabold mt-6 mb-4 font-robotoBold">
              {br ? "Projetos" : "Projects"}
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 text-[1rem] sm:text-lg text-[#808080] mb-6 ">
              {projects.map((item, idx) => (
                <div
                  className="flex gap-3 justify-center items-center"
                  key={idx}
                >
                  <div className="flex flex-col">
                    <a
                      className="flex hover:underline font-robotoBold text-[#682ae9]"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                      <FaLink className="w-3 h-3" />
                    </a>
                    <p className="">{item.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {item.tecnologies.map((i, index) => (
                        <p className="text-[12px] sm:text-sm" key={index}>
                          {i} {index < item.tecnologies.length - 1 && "•"}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ServerError />
      )}
    </div>
  );
}

export default Main;
