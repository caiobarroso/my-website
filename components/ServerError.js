/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { isPortuguese } from "../atoms/index";
import Image from "next/image";

function ServerError() {
  const [br, setBr] = useRecoilState(isPortuguese);
  const [text, a] = useTypewriter({
    words: [
      "Ooops.. Infelizmente não conseguimos estabelecer uma conexão com o servidor.",
    ],
    delaySpeed: 500,
  });

  const [textUs, b] = useTypewriter({
    words: [
      "Oops... unfortunately we couldn't establish a connection with the server.",
    ],
    delaySpeed: 500,
  });

  const [callUs, c] = useTypewriter({
    words: ["saint", "dev**"],
    delaySpeed: 3000,
    loop: true,
  });

  const [callBr, d] = useTypewriter({
    words: ["santo", "dev**"],
    delaySpeed: 3000,
    loop: true,
  });

  return (
    <div className="flex flex-col justify-center items-center  pt-16 pb-12 sm:py-12 text-center font-robotoRegular">
      <Image
        src="/sadpaper.png"
        alt="..."
        width={80}
        height={160}
        priority={true}
        className="mb-4"
      />
      <h1 className="font-robotoBold text-white text-base sm:text-2xl sm:w-1/2">
        {br ? text : textUs} <Cursor cursorColor="white" />
      </h1>
      <div className="flex justify-center items-center mt-4 gap-3">
        <FaExclamationTriangle className="text-yellow-300" />
        <p className="text-sm sm:text-xl text-red-700 font-robotoBold">
          ERR_CONNECTION_REFUSED
        </p>
        <FaExclamationTriangle className="text-yellow-300" />
      </div>
      <h1 className="text-[#C586C0] mt-3 text-sm">
        <span>(</span>
        <span className="text-[#CE9178]">
          "{br ? `chame um ${callBr}` : `call a ${callUs}`}
          <Cursor cursorColor="white" />"
        </span>
        <span>)</span>
      </h1>
    </div>
  );
}

export default ServerError;
