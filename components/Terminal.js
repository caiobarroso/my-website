/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  isValid,
  isTwoClosed,
  isPortuguese,
  isNormal,
  loading,
  isTxtClosed,
} from "@atoms";
import { tabs_br } from "@constants/ptBR";
import { tabs_us } from "@constants/enUS";
import Notepad from "@components/Notepad";
import Codeblock from "@components/Codeblock";
import {
  AiOutlineReload,
  AiFillFileText,
  AiOutlineBlock,
} from "react-icons/ai";

function Terminal() {
  const [tabTwoClosed, setTabTwoClosed] = useRecoilState(isTwoClosed);
  const [txtClosed, setTxtClosed] = useRecoilState(isTxtClosed);
  const [normal, setNormal] = useRecoilState(isNormal);
  const [load, setLoad] = useRecoilState(loading);
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

  const closeTxt = () => {
    setTxtClosed(false);
  };

  const reload = () => {
    if (!normal) {
      setTabOneClosed(false);
      setTabTwoClosed(false);
    } else {
      setTxtClosed(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.toLocaleLowerCase() === "node server.js") {
      setTimeout(() => {
        setValid(true);
        setText("Listening Server, on PORT: 4000");
      }, 2500);
    } else {
      setTimeout(() => {
        setValid(false);
        setText("Invalid command..");
      }, 2500);
    }
    setLoad(false);
  };

  const aboutTab = `const resume = require("resume");

const name = "Caio Barroso 👋";
const job = "Software Developer";
const focusedOn = ["${tabs[0].focusedOn[0]}","${tabs[0].focusedOn[1]}"];
`;

  const serverTab = `const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// -> -> ${br ? "algumas rotas de API aqui" : "some API routes here"} <- <-
app.listen( PORT , () => { console.log("Listening Server, on PORT: " + PORT )});

// ${tabs[1].comment_one}
// ${tabs[1].comment_two}
  `;

  return (
    <div className="flex gap-4 mt-8">
      <div className="flex flex-col w-full">
        <div className="rounded-lg">
          <div className="bg-[#202327] flex p-1 h-10 items-center">
            <div
              className={`${
                !normal || !txtClosed ? "hidden" : "flex"
              } items-center bg-[#15181E] p-1 px-3`}
            >
              <div className={` flex justify-center items-center gap-4`}>
                <div className="flex justify-center items-center gap-1">
                  <AiFillFileText className="text-white w-4 h-4" />
                  <h1 className="text-white font-robotoBold ">
                    {br ? "meuresumo" : "myresume"}.txt
                  </h1>
                </div>
                <button className={`text-white `} onClick={closeTxt}>
                  x
                </button>
              </div>
            </div>
            <div
              className={`${!server ? "bg-[#15181E]" : ""} ${
                tabOneClosed || normal ? "hidden" : "flex"
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
                tabTwoClosed || normal ? "hidden" : "flex"
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
              className={`ml-auto mx-2 w-5 h-5 text-white cursor-pointer`}
              onClick={reload}
            />
          </div>

          <div className="flex bg-[#15181E]">
            {normal && <Notepad />}
            {!server && !tabOneClosed && !normal && (
              <Codeblock code={aboutTab} />
            )}
            {server && !tabTwoClosed && !normal && (
              <Codeblock code={serverTab} />
            )}
          </div>
          <div
            className={`${
              server && !tabTwoClosed && !normal ? "flex-col" : "hidden"
            } border-t-[1px] border-gray-400 bg-[#15181E] p-3`}
          >
            <h1 className="text-[#808080] text-sm">Terminal</h1>
            <div className="flex items-center mt-2 gap-1 ">
              <p className="text-white text-xs sm:text-sm font-robotoRegular mt-[2px] sm:mt-[1px]">
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
