/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { isValid, isNormal, loading, tabSelected } from "@atoms";
import Notepad from "@components/Notepad";
import Codeblock from "@components/Codeblock";
import {
  AiOutlineReload,
  AiFillFileText,
  AiOutlineClose,
} from "react-icons/ai";

function Terminal({ info }) {
  const [normal, setNormal] = useRecoilState(isNormal);
  const [load, setLoad] = useRecoilState(loading);
  const [valid, setValid] = useRecoilState(isValid);

  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [selectedTab, setSelectedTab] = useRecoilState(tabSelected);
  const [tabClosed, setTabClosed] = useState([]);

  const closeTab = (index) => {
    if (tabClosed.length < 3) {
      setTabClosed((current) => [...current, index]);
    }

    if (valid) {
      if (index === 2) {
        setValid(false);
        setNormal(false);
        setText("");
        setInput("");
      }
    }
  };

  useEffect(() => {
    const remainingTabs = [1, 2, 3].filter((item) => !tabClosed.includes(item));

    setSelectedTab(remainingTabs[0]);
  }, [tabClosed, setSelectedTab]);

  const reload = () => {
    setTabClosed([]);
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

  const { tabs, description } = info;

  const aboutTab = `const resume = require("resume");

const name = "Caio Barroso 👋";
const job = "Software Developer";
const focusedOn = ["${tabs[0].focusedOn[0]}","${tabs[0].focusedOn[1]}"];
`;

  const serverTab = `const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// -> -> some API routes here <- <-
app.listen( PORT , () => { console.log("Listening Server, on PORT: " + PORT )});

// ${tabs[1].comment_one}
// ${tabs[1].comment_two}

// *${tabs[1].comment_three}*
  `;

  return (
    <div className="flex gap-4 mt-8">
      <div className="flex flex-col w-full">
        <div className="rounded-lg">
          <div className="bg-[#202327] flex p-1 h-10 items-center">
            {/* first tab */}
            <div
              className={`
              ${selectedTab === 1 ? "bg-[#15181E]" : ""} 
              ${tabClosed.includes(1) ? "hidden" : "flex"} 
              justify-between 
              items-center 
              p-1 
              border-gray-400 
              mr-1 
              cursor-pointer 
              w-28 
              sm:w-36`}
            >
              <div
                className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 flex-1"
                onClick={() => setSelectedTab(1)}
              >
                <Image
                  src="/logo.svg"
                  alt="..."
                  width={3}
                  height={3}
                  priority={true}
                  className="w-2 h-2 sm:w-3 sm:h-3"
                />
                <h2 className="text-white text-xs sm:text-sm italic font-semibold">
                  {info.tabs[0].tab}.js
                </h2>
              </div>

              <AiOutlineClose
                className={`
                ${selectedTab === 1 ? "flex" : "hidden"} 
                text-white 
                text-xs 
                sm:text-sm 
                hover:bg-[#272c36] 
                rounded-sm`}
                onClick={() => closeTab(1)}
              />
            </div>
            {/* second tab */}
            <div
              className={`
              ${selectedTab === 2 ? "bg-[#15181E]" : ""} 
              ${tabClosed.includes(2) ? "hidden" : "flex"} 
              justify-between 
              items-center 
              p-1 
              mr-1 
              cursor-pointer 
              w-24 
              sm:w-36`}
            >
              <div
                className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 flex-1"
                onClick={() => setSelectedTab(2)}
              >
                <Image
                  src="/logo.svg"
                  alt="..."
                  width={3}
                  height={3}
                  priority={true}
                  className="w-2 h-2 sm:w-3 sm:h-3"
                />
                <h2 className="text-white text-xs sm:text-sm italic font-semibold">
                  {info.tabs[1].tab}.js
                </h2>
              </div>

              <AiOutlineClose
                className={`
                ${selectedTab === 2 ? "flex" : "hidden"} 
                text-white 
                text-xs 
                sm:text-sm 
                hover:bg-[#272c36] 
                rounded-sm`}
                onClick={() => closeTab(2)}
              />
            </div>
            {/* third tab */}
            <div
              className={`
              ${selectedTab === 3 ? "bg-[#15181E]" : ""} 
              ${tabClosed.includes(3) || !normal ? "hidden" : "flex"} 
              justify-between 
              items-center 
              p-1 
              cursor-pointer 
              w-[85px] 
              sm:w-28`}
            >
              <div
                className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 flex-1"
                onClick={() => setSelectedTab(3)}
              >
                <AiFillFileText className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                <h2 className="text-white text-xs sm:text-sm italic font-semibold">
                  caio.txt
                </h2>
              </div>

              <AiOutlineClose
                className={`${selectedTab === 3 ? "flex" : "hidden"} text-white 
                text-xs 
                sm:text-sm 
                cursor-pointer 
                hover:bg-[#272c36] 
                rounded-sm`}
                onClick={() => closeTab(3)}
              />
            </div>

            <AiOutlineReload
              className="ml-auto mx-2 w-3 h-3 sm:w-5 sm:h-5 text-white cursor-pointer"
              onClick={reload}
            />
          </div>

          <div className="flex bg-[#15181E] min-h-[10rem]">
            {selectedTab === 1 && !tabClosed.includes(1) && (
              <Codeblock code={aboutTab} />
            )}
            {selectedTab === 2 && !tabClosed.includes(2) && (
              <Codeblock code={serverTab} />
            )}
            {selectedTab === 3 && !tabClosed.includes(3) && normal && (
              <Notepad text={description} />
            )}
          </div>
          <div
            className={`
            ${
              selectedTab === 2 && !tabClosed.includes(2)
                ? "flex-col"
                : "hidden"
            } 
            border-t-[1px] 
            border-gray-400 
            bg-[#15181E] 
            p-3`}
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
                  value={normal && valid ? "node server.js" : input}
                  onChange={(ev) => setInput(ev.target.value)}
                  className="blinki bg-transparent text-xs sm:text-sm outline-none text-yellow-300 w-full lowercase font-robotoRegular"
                />
              </form>
            </div>
            <h1 className="text-white text-xs sm:text-sm font-robotoRegular">
              {normal && valid ? "Listening Server, on PORT: 4000" : text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
