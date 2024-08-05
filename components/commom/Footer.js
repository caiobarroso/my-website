import React, { useMemo, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isValid } from "@atoms";

function Footer({ texts }) {
  const [valid, setValid] = useRecoilState(isValid);
  const [textIndex, setTextIndex] = useState(0);

  const handleCheckboxClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  var text = valid ? "SERVER OK" : "SERVER ERROR";

  return (
    <div className="border-t-[1px] border-zinc-500  mb-5 text-zinc-400">
      <div className="flex flex-row mt-2 sm:mt-4 mx-2 w-full  justify-between ">
        <div className="flex items-start justify-between gap-2 ">
          <div
            className={`
            ${valid ? "bg-green-600" : "bg-red-600"} 
            flex 
            text-black 
            px-2 
            sm:px-4 
            py-1 
            font-medium 
            rounded-md 
            justify-center 
            items-center 
            gap-2`}
          >
            <FaCircle
              className={`
              ${valid ? "text-green-200" : "text-red-200"}
              w-2 
              h-2 
              sm:w-4 
              sm:h-4`}
            />
            <h1
              className={`
              ${valid ? "" : "text-white"} 
              text-[8px] 
              sm:text-xs 
              font-robotoBold`}
            >
              {text}
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 px-2">
          <span className="text-sm sm:text-base text-slate-300 font-semibold animate__animated animate__fadeIn">
            {texts[textIndex]}
          </span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onClick={handleCheckboxClick}
            />
            <div className="w-[64px] h-8 bg-[#15181E] border-2 border-slate-800 rounded-full peer peer-checked:after:translate-x-[33px] peer-hover:after:bg-cyan-200 peer-hover:after:border-none after:content-[''] after:absolute after:top-[6px] after:left-[5px] after:bg-neutral-50 after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all"></div>
            <div className="peer peer-checked:translate-x-[33px] peer-hover:shadow-[0_0_50px_10px_rgba(96,165,250,0.2)] pointer-events-none content-[''] absolute top-[9px] left-[9px] transition-all h-3 w-3">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4113 9.46829C10.9477 10.4362 10.233 11.2621 9.34156 11.8598C8.45016 12.4576 7.41476 12.8052 6.34327 12.8666C5.27178 12.928 4.20344 12.7009 3.24959 12.2089C2.29575 11.717 1.49133 10.9781 0.920181 10.0695C0.34903 9.16084 0.0320588 8.11563 0.00230647 7.0428C-0.0274459 5.96996 0.23111 4.90879 0.751023 3.96988C1.27094 3.03097 2.03317 2.24871 2.95828 1.70463C3.88339 1.16054 4.93751 0.874555 6.01075 0.876479C6.55099 0.875303 7.08884 0.948297 7.60923 1.09341C6.5547 1.42789 5.65456 2.12847 5.07141 3.0686C4.48827 4.00873 4.26058 5.12642 4.42948 6.21976C4.59837 7.31309 5.15271 8.30997 5.99236 9.03032C6.83201 9.75066 7.90159 10.147 9.00789 10.1476C9.8566 10.1489 10.6889 9.91366 11.4113 9.46829Z"
                  fill="#020617"
                ></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Footer;
