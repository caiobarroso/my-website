import React from "react";
import { FaCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isValid } from "@atoms";

function Footer() {
  const [valid, setValid] = useRecoilState(isValid);
  var text = valid ? "SERVER OK" : "SERVER ERROR";

  return (
    <div className="border-t-[1px] border-zinc-500  mb-5 text-zinc-400">
      <div className="flex flex-row justify-between mt-2 sm:mt-4 mx-2">
        <div className="flex items-center justify-between  w-full gap-2">
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
        <div className="flex w-full justify-end">
          <p className="text-[8px] sm:text-xs tracking-widest">
            Designed & Developed by:{" "}
            <a
              className="underline cursor-pointer"
              href="https://www.linkedin.com/in/caio-barroso-452aa8197/"
              target="_blank"
              rel="noreferrer"
            >
              CBS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
