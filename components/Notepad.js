import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { language, isValid } from "@atoms";
import data from "../constants/data.json";

function Notepad() {
  const [lang, setLang] = useRecoilState(language);
  const [valid, setValid] = useRecoilState(isValid);

  const fixedBio =
    lang === "en-US"
      ? data.enUS.description
      : lang === "pt-BR"
      ? data.ptBR.description
      : data.esES.description;

  const [bio, startTypewriter] = useTypewriter({
    words: [fixedBio],
    typeSpeed: 32,
  });

  return (
    <div
      className={` 
      flex 
      px-6 
      py-4 
      text-lg 
      sm:text-2xl 
      text-white 
      font-robotoRegular 
      min-h-[22rem] 
      sm:min-h-[12rem]`}
    >
      <h1>{valid ? fixedBio : bio}</h1>
    </div>
  );
}

export default Notepad;
