import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { isTxtClosed, language } from "@atoms";
import data from "../constants/data.json";

function Notepad() {
  const [txtClosed, setTxtClosed] = useRecoilState(isTxtClosed);
  const [lang, setLang] = useRecoilState(language);

  const [bioUS, a] = useTypewriter({
    words: [data.enUS.description],
    typeSpeed: 32,
  });

  const [bioES, b] = useTypewriter({
    words: [data.esES.description],
    typeSpeed: 32,
  });

  const [bioBR, c] = useTypewriter({
    words: [data.ptBR.description],
    typeSpeed: 32,
  });

  const bio = lang === "en-US" ? bioUS : lang === "pt-BR" ? bioBR : bioES;

  return (
    <div
      className={`${
        !txtClosed ? "hidden" : "flex"
      } flex px-6 py-4 text-LG sm:text-2xl text-white font-robotoRegular min-h-[22rem] sm:min-h-[12rem]`}
    >
      <h1 className="">{bio}</h1>
    </div>
  );
}

export default Notepad;
