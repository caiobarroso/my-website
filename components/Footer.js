import React from "react";
import { FaCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { isValid } from "@atoms";

function Footer() {
  const [valid, setValid] = useRecoilState(isValid);
  var text = valid ? "SERVER OK" : "SERVER ERROR";

  return (
    <div className="flex border-t-[1px] border-zinc-500  mb-5 text-zinc-400">
      <div className="flex items-center justify-center lg:justify-between mt-5 w-full lg:mt-5 gap-2">
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
    </div>
  );
}

export default Footer;
