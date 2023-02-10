/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { isValid, isTwoClosed, isPortuguese } from "../atoms/index";
import { tabs_br } from "../constants/ptBR";
import { tabs_us } from "../constants/enUS";
import { AiOutlineReload } from "react-icons/ai";

function Terminal({}) {
  const [tabTwoClosed, setTabTwoClosed] = useRecoilState(isTwoClosed);
  const [br, setBr] = useRecoilState(isPortuguese);
  const [valid, setValid] = useRecoilState(isValid);

  const [tabOneClosed, setTabOneClosed] = useState(false);
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [server, setServer] = useState(false);

  var tabs = br ? tabs_br : tabs_us;

  const toggleServer = () => {
    if (tabOneClosed || tabTwoClosed) return;
    setServer((current) => !current);
  };

  const closeTabOne = () => {
    setTabOneClosed(true);
  };

  const closeTabTwo = () => {
    setTabTwoClosed(true);
    setValid(false);
    setInput("");
    setText("");
  };

  const reload = () => {
    setTabOneClosed(false);
    setTabTwoClosed(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.toLocaleLowerCase() === "node server.js") {
      setTimeout(() => {
        setValid(true);
        setText("Listening Server, on PORT: 4000...");
      }, 2500);
    } else {
      setTimeout(() => {
        setValid(false);
        setText("Invalid command..");
      }, 2500);
    }
  };

  return (
    <div className="flex gap-4 mt-8">
      <div className="flex flex-col w-full">
        <div className="rounded-lg">
          <div className="bg-[#202327] flex p-1 h-10 items-center">
            <div
              className={`${!server ? "bg-[#15181E]" : ""} ${
                tabOneClosed ? "hidden" : "flex"
              } justify-center items-center p-1 gap-3 border-gray-400 mr-1 px-3 cursor-pointer w-34 sm:w-36`}
              onClick={toggleServer}
            >
              <Image
                src="/logo.svg"
                alt="..."
                width={3}
                height={3}
                priority={true}
                className="w-3 h-3"
              />
              <h2 className="text-white text-sm italic font-semibold">
                {tabs[0].tab}.js
              </h2>
              <button
                className={`${!server ? "flex" : "hidden"} text-white`}
                onClick={closeTabOne}
              >
                x
              </button>
            </div>
            <div
              className={`${server ? "bg-[#15181E]" : ""} ${
                tabTwoClosed ? "hidden" : "flex"
              } justify-center items-center p-1 gap-3 px-3 cursor-pointer w-34 sm:w-36`}
              onClick={toggleServer}
            >
              <Image
                src="/logo.svg"
                alt="..."
                width={3}
                height={3}
                priority={true}
                className="w-3 h-3"
              />
              <h2 className="text-white text-sm italic font-semibold">
                {tabs[1].tab}.js
              </h2>
              <span
                className={`${server ? "flex" : "hidden"} text-white`}
                onClick={closeTabTwo}
              >
                x
              </span>
            </div>

            <AiOutlineReload
              className="ml-auto mx-2 w-5 h-5 text-white cursor-pointer"
              onClick={reload}
            />
          </div>

          <div className="flex bg-[#15181E]">
            <div className="flex flex-col text-sm p-2 sm:p-3 gap-1 text-gray-500">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
            {!server && !tabOneClosed && (
              <div className="p-2">
                <h1 className="text-white text-sm sm:text-base">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">resume</span> ={" "}
                  <span className="text-[#DCDCAA]">require</span>(
                  <span className="text-[#CE9178]">'resume'</span>)
                </h1>
                <h1 className="text-white text-sm sm:text-base mt-7 sm:mt-6">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">name</span> ={" "}
                  <span className="text-[#CE9178]">'{tabs[0].name} 👋'</span>
                </h1>
                <h1 className="text-sm sm:text-base text-white mt-1 sm:mt-[1.5px]">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">job</span> ={" "}
                  <span className="text-[#CE9178]">
                    'JavaScript Fullstack Developer'
                  </span>
                </h1>
                <h1 className="text-sm sm:text-base text-white mt-1 sm:mt-[1.5px]">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">focusedOn</span> ={" "}
                  <span className="text-[#CE9178]">
                    <span className="text-[#C586C0]">[</span> '
                    {tabs[0].focusedOn[0]}'
                    <span className="text-white"> , </span>'
                    {tabs[0].focusedOn[1]}'
                    <span className="text-[#C586C0]"> ]</span>
                  </span>
                </h1>
              </div>
            )}
            {server && !tabTwoClosed && (
              <div className="p-2">
                <h1 className="text-white text-sm sm:text-base">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#DCDCAA]">express</span> ={" "}
                  <span className="text-[#DCDCAA]">require</span>(
                  <span className="text-[#CE9178]">'express'</span>);
                </h1>
                <h1 className="text-white text-sm sm:text-base">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">app</span> ={" "}
                  <span className="text-[#DCDCAA]">express();</span>
                </h1>

                <h1 className="text-sm sm:text-base text-white mt-2 sm:mt-6">
                  <span className="text-[#4EB4D4]">const</span>{" "}
                  <span className="text-[#4FC1FF]">PORT</span> ={" "}
                  <span className="text-[#4FC1FF]">
                    process.env.<span className="text-[#4EB4D4]">PORT</span>{" "}
                    <span className="text-white">| |</span> 4000
                  </span>
                </h1>
                <h1 className="flex flex-col text-sm sm:text-base mt-1 sm:mt-[1.5px]">
                  <span className="text-[#99CD7C]">
                    // -&gt; -&gt;{" "}
                    {br ? "algumas rotas de API aqui" : "some API routes here"}{" "}
                    &lt;- &lt;-
                  </span>
                </h1>
                <h1 className="text-sm sm:text-base text-white mt-1 sm:mt-[22px]">
                  <span className="text-[#4EB4D4]">app</span>
                  <span className="text-[#DCDCAA]">.listen(</span>{" "}
                  <span className="text-[#4FC1FF]">
                    PORT <span className="text-white">,</span>{" "}
                    <span className="text-[#C586C0]">()</span>
                    <span>
                      {" "}
                      =&gt; <span className="text-[#C586C0]">{"{"}</span>{" "}
                    </span>
                    <span className="text-[#CE9178]">
                      {" "}
                      <span className="text-[#4EB4D4]">
                        console<span className="text-[#DCDCAA]">.log</span>
                      </span>
                      <span className="text-[#4EB4D4]">(</span>"Listening
                      Server, on PORT: "{" "}
                      <span className="text-[#4EB4D4]">+ PORT</span>{" "}
                      <span className="text-[#4EB4D4]">)</span>
                      <span className="text-[#C586C0]">{"}"}</span>
                      <span className="text-[#DCDCAA]">)</span>
                    </span>
                  </span>
                </h1>

                <h1 className="flex flex-col text-sm sm:text-base mt-2 sm:mt-6">
                  <span className="text-[#99CD7C]">
                    // {tabs[1].comment_one}
                  </span>
                  <span className="text-[#99CD7C] mt-2 sm:mt-0">
                    // {tabs[1].comment_two}
                  </span>
                </h1>
              </div>
            )}
          </div>
          <div
            className={`${
              server && !tabTwoClosed ? "flex-col" : "hidden"
            } border-t-[1px] border-gray-400 bg-[#15181E] p-3`}
          >
            <h1 className="text-[#808080] text-sm">Terminal</h1>
            <div className="flex items-center mt-2 gap-1 ">
              <p className="text-white text-xs sm:text-sm font-robotoRegular mt-[1px]">
                E:\programs\next\resume&gt;
              </p>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="node server.js"
                  value={input}
                  onChange={(ev) => setInput(ev.target.value)}
                  className="blinki bg-transparent text-xs sm:text-sm outline-none text-yellow-300 w-full lowercase font-robotoRegular"
                />
              </form>
            </div>
            <h1 className="text-white text-xs sm:text-sm font-robotoRegular">
              {text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
