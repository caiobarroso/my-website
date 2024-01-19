/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import {
  FaDownload,
  FaLink,
  FaChessKnight,
  FaGamepad,
  FaVolleyballBall,
  FaPodcast,
} from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isValid, isNormal, language } from "@atoms";
import Terminal from "@components/Terminal";
import ServerError from "@components/ServerError";
import data from "../constants/data.json";
import Model3d from "./Model3d";

function Main() {
  const [normal, setNormal] = useRecoilState(isNormal);
  const [valid, setValid] = useRecoilState(isValid);
  const [info, setInfo] = useState(data.ptBR);
  const [lang, setLang] = useRecoilState(language);

  useEffect(() => {
    if (lang === "pt-BR") {
      setInfo(data.ptBR);
    } else if (lang === "en-US") {
      setInfo(data.enUS);
    } else {
      setInfo(data.esES);
    }
  }, [setInfo, lang]);

  const {
    about,
    soft_skills,
    experience,
    education,
    projects,
    languages,
    hobby,
  } = info;

  const download =
    lang === "pt-BR"
      ? "Baixe meu"
      : lang === "en-US"
      ? "Download my"
      : "Descargar mi";

  return (
    <div className="flex flex-col">
      <Terminal info={info} />

      {valid ? (
        <div>
          <div className={`flex flex-col font-robotoRegular`}>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <div>
                  <p className="text-white text-[3.2rem] sm:text-[4rem] font-robotoBold">
                    {info.about.title}
                  </p>
                  <div className="flex gap-4">
                    <p className="text-[#808080] text-sm sm:text-base">
                      {download}
                    </p>
                    <a
                      className="flex text-center bg-[#0e76a8] px-4 rounded-full text-white justify-center items-center gap-2 text-sm"
                      href={
                        lang === "pt-BR"
                          ? "https://drive.google.com/file/d/1mXcYBNCXnx4VAXCcYMU_JcqzFShXptAl/view?usp=sharing"
                          : "https://drive.google.com/file/d/1Xm0kQFAOBxZAmql5U1HPC3TMQy0XSTrT/view?usp=sharing"
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      CV
                      <FaDownload className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <h2 className="text-[#0e76a8] text-[1rem] sm:text-lg leading-6  mt-4">
                      {about.bio}
                    </h2>

                    <Model3d />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-base text-[1rem] sm:text-lg text-[#808080] mt-4">
              // Fullstack Software Developer @ Bean Softwares
            </h2>
            <h2 className="text-base text-[1rem] sm:text-lg text-[#808080]">
              // JS &gt;&gt;&gt;&gt;
            </h2>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">Hard skills</h1>

            <div className="section">
              <h2 className="">GraphQL, MongoDB, PostgreSQL, Firebase</h2>

              <h2 className="">
                JavaScript, CSS, HTML, React, React-native, Next.js, Node.js,
                Tailwindcss, Typescript
              </h2>

              <h2 className="">Docker, Git</h2>
              <h2 className="">Jest, Cypress</h2>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">Soft skills</h1>

            <div className="section lg:w-[90%]">
              <h2 className="">{soft_skills.sec_1}</h2>

              <h2 className="">{soft_skills.sec_2}</h2>
              <h2 className="">{soft_skills.sec_3}</h2>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">{experience.title}</h1>

            <div className="section">
              {experience.items.map((item, index) => (
                <div key={index}>
                  <h2 className="text-[#0e76a8] font-bold">{item.title}</h2>
                  <h2 className="">@ {item.place}</h2>
                  <p className="text-sm">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="font-robotoRegular">
            <h1 className="title">{education.title}</h1>

            <div className="text-[1rem] sm:text-lg">
              <h2 className="text-[#0e76a8] font-bold">
                2019-2023 • {education.university}
              </h2>
              <h2 className="text-[#808080]">{education.description}</h2>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">
              {lang !== "en-US" ? "Idiomas" : "Languages"}
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14">
              <div className="text-[1rem] sm:text-xl">
                <h2 className="text-[#808080]">// {languages[0].status}</h2>
                <h2 className="text-[#0e76a8] font-bold text-base mt-2">
                  pt-BR{" "}
                  <span className="text-[#808080]">{languages[0].name}</span>
                </h2>
              </div>
              <div className="text-[1rem] sm:text-xl">
                <h2 className="text-[#808080]">// {languages[1].status}</h2>
                <h2 className="text-[#0e76a8] font-bold text-base mt-2">
                  en-US{" "}
                  <span className="text-[#808080]">{languages[1].name}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">{projects.title}</h1>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-14 text-[1rem] sm:text-lg text-[#808080] mb-6 ">
              {projects.items.map((item, idx) => (
                <div
                  className="flex gap-3 justify-center items-center"
                  key={idx}
                >
                  <div className="flex flex-col">
                    <a
                      className="flex hover:underline font-robotoBold text-[#0e76a8]"
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
                        <p className="text-sm" key={index}>
                          {i} {index < item.tecnologies.length - 1 && "•"}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="font-robotoRegular">
            <h1 className="title">{hobby.title}</h1>

            <div className="flex flex-wrap gap-6 lg:gap-16 mb-6 text-[1rem] sm:text-lg text-[#808080] leading-6">
              <div className="flex items-center gap-3">
                <h2 className="">{hobby.sections.one}</h2>
                <FaChessKnight className="w-4 h-4" />
              </div>

              <div className="flex flex-row items-center gap-3">
                <h2 className="">{hobby.sections.two}</h2>
                <FaGamepad className="w-4 h-4" />
              </div>
              <div className="flex flex-row items-center gap-3">
                <h2 className="">{hobby.sections.three}</h2>
                <FaVolleyballBall className="w-4 h-4" />
              </div>
              <div className="flex flex-row items-center gap-3">
                <h2 className="">Podcasts</h2>
                <FaPodcast className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ServerError info={info} />
      )}
    </div>
  );
}

export default Main;
