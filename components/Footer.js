import React from "react";
import { FaCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isValid } from "@atoms";

function Footer() {
  const [valid, setValid] = useRecoilState(isValid);
  var text = valid ? "SERVER OK" : "SERVER ERROR";

  return (
    <div className="border-t-[1px] border-zinc-500  mb-5 text-zinc-400">
      <div className="flex flex-col md:flex-row mt-4 ">
        <div className="flex items-center justify-center md:justify-between  w-full gap-2">
          <div
            className={`flex text-black ${
              valid ? "bg-green-600" : "bg-red-600"
            } px-4 py-1 font-medium rounded-md justify-center items-center gap-2`}
          >
            <FaCircle
              className={`w-4 h-4 ${valid ? "text-green-200" : "text-red-200"}`}
            />
            <h1
              className={`text-xs ${valid ? "" : "text-white"} font-robotoBold`}
            >
              {text}
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center items-center md:justify-end mt-4 md:mt-0">
          <p className="text-xs tracking-widest">
            DESIGNED & DEVELOPED BY:{" "}
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
