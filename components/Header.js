import React from "react";
import { FaLinkedin, FaGithub, chart } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isPortuguese, isNormal, isValid, loading } from "@atoms";

function Header() {
  const [br, setBr] = useRecoilState(isPortuguese);
  const [normal, setNormal] = useRecoilState(isNormal);
  const [valid, setValid] = useRecoilState(isValid);
  const [load, setLoad] = useRecoilState(loading);

  const toggleLanguage = () => {
    setBr((current) => !current);
  };

  return (
    <div className="flex py-3 justify-between sticky top-0 z-50 bg-transparent font-robotoRegular bg-[#1E1E1E]">
      <div className="flex  bg-[#0e76a8] justify-center items-center font-robotoBold rounded-full px-4 h-[26px] sm:h-10">
        <h1 className="text-[#1E1E1E] text-xl">C B S</h1>
      </div>
      <div className="flex gap-2 sm:gap-3 ">
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/caio-barroso-452aa8197/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-7 h-[26px] sm:w-10 sm:h-10 text-[#0e76a8]" />
        </a>
        <a
          className="cursor-pointer"
          href="https://github.com/caiobarroso"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-7 h-[26px] sm:w-10 sm:h-10 text-[#0e76a8]" />
        </a>

        <input
          type="checkbox"
          className="toggle-input h-[26px] sm:h-[40px]"
          onClick={toggleLanguage}
        />
      </div>
    </div>
  );
}

export default Header;
