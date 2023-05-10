import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaAngleDown } from "react-icons/fa";
import { useRecoilState } from "recoil";
import Flag from "react-flagkit";
import { language } from "@atoms";

function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useRecoilState(language);

  const countries = [
    {
      name: "Portuguese",
      flag: "BR",
      code: "pt-BR",
    },
    {
      name: "English",
      flag: "US",
      code: "en-US",
    },
    {
      name: "Spanish",
      flag: "ES",
      code: "es-ES",
    },
  ];
  const [selected, setSelected] = useState(countries[0]);

  const handleSelect = (country) => {
    if (country !== selected) {
      setSelected(country);
      setLang(country.code);
    }
    setOpen(false);
  };

  return (
    <div className="flex py-3 justify-between sticky top-0 z-50 bg-transparent font-robotoRegular bg-[#1E1E1E] mx-1 md:mx-4">
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
        <div className="font-medium cursor-pointer w-28 select-none">
          <div
            onClick={() => setOpen(!open)}
            className={`
            ${!selected && "text-gray-700"}
            flex 
            bg-transparent 
            text-white 
            items-center 
            h-[26px] 
            sm:h-10 
            text-xs 
            sm:text-sm 
            justify-center 
            font-semibold`}
          >
            <Flag country={selected.flag} size={15} className="mr-2" />
            {selected.code}
            <svg
              className={`
              ${open ? "" : "transform rotate-180"}
              w-3 
              h-3 
              ml-2 
              transition-transform 
              duration-300`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 15.51l-5.256-5.256a1 1 0 0 1 1.414-1.414L10 12.682l3.842-3.842a1 1 0 1 1 1.414 1.414L10 15.51z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <ul
            className={`
            ${open ? "max-h-60" : "max-h-0"}
            absolute 
            bg-[#1e232c] 
            mt-2 
            overflow-y-auto 
            w-28 
            sm:w-32 
            rounded-lg`}
          >
            {countries.map((item) => (
              <li
                key={item.name}
                className="flex p-2 text-xs text-white sm:text-sm hover:bg-slate-100 hover:text-black"
                onClick={() => handleSelect(item)}
              >
                <Flag country={item.flag} size={15} className="mr-2" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
