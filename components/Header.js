import React, { useState } from "react";
import { FaLinkedin, FaGithub, chart } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { isPortuguese } from "../atoms/index";

function Header() {
  const [br, setBr] = useRecoilState(isPortuguese);

  const toggleLanguage = () => {
    setBr((current) => !current);
    console.log(br);
  };

  return (
    <div className="flex py-4 justify-between sticky top-0 z-50 bg-[#1E1E1E] font-robotoRegular">
      <div className="flex  bg-[#682ae9] justify-center items-center font-robotoBold text-white rounded-full px-4">
        <h1 className="">C B S</h1>
      </div>
      <div className="flex gap-2 sm:gap-3 ">
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/caio-barroso-452aa8197/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-7 h-7 sm:w-10 sm:h-10 text-[#682ae9]" />
        </a>
        <a
          className="cursor-pointer"
          href="https://github.com/caiobarroso"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-7 h-7 sm:w-10 sm:h-10 text-[#682ae9]" />
        </a>

        <input
          type="checkbox"
          className="toggle-input h-[28px] sm:h-[40px]"
          onClick={toggleLanguage}
        />
      </div>
    </div>
  );
}

export default Header;