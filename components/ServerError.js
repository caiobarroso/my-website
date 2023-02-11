/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ReactLoading from "react-loading";
import { useRecoilState } from "recoil";
import { isPortuguese, isNormal, isValid } from "../atoms/index";
import Image from "next/image";

function ServerError() {
  const [br, setBr] = useRecoilState(isPortuguese);
  const [load, setLoad] = useState(false);
  const [normal, setNormal] = useRecoilState(isNormal);
  const [valid, setValid] = useRecoilState(isValid);

  const [callUs, c] = useTypewriter({
    words: ["saint", "dev**"],
    delaySpeed: 3000,
    loop: true,
    typeSpeed: 70,
  });

  const [callBr, d] = useTypewriter({
    words: ["santo", "dev**"],
    delaySpeed: 3000,
    loop: true,
    typeSpeed: 70,
  });

  const toggleNormal = () => {
    setLoad(true);
    setNormal(true);
    setTimeout(() => {
      setValid(true);
      setLoad(false);
    }, 12500);
  };

  if (load) {
    return (
      <div className="flex flex-col justify-center items-center py-16 text-center">
        <ReactLoading type="spokes" color="white" height={50} width={50} />
        <h1 className="text-white font-robotoRegular mt-4">
          {br
            ? "Aguarde, estamos retomando o servidor..."
            : "Wait, we are fixing the server..."}
          <Cursor cursorColor="white" />
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center  py-16 text-center font-robotoRegular">
      <Image
        src="/sadpaper.png"
        alt="..."
        width={80}
        height={160}
        priority={true}
        className="mb-4"
      />
      <h1 className="font-robotoBold text-white text-base sm:text-2xl sm:w-1/2">
        {br
          ? "Ooops.. Infelizmente não conseguimos estabelecer uma conexão com o servidor."
          : "Oops... unfortunately we couldn't establish a connection with the server."}{" "}
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
      <button
        className="animate-bounce cursor-pointer bg-gray-300 rounded-md px-4 py-1 mt-4 border-[1px] border-black ${style} shadow-[4px_4px_0px_rgb(0,0,0)] "
        onClick={toggleNormal}
      >
        {br ? "não encontrou um dev ?" : "didn't find a dev ?"}
      </button>
    </div>
  );
}

export default ServerError;
