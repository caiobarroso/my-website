import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRecoilState } from "recoil";
import { isPortuguese, isTxtClosed } from "../atoms/index";

function Notepad() {
  const [br, setBr] = useRecoilState(isPortuguese);
  const [txtClosed, setTxtClosed] = useRecoilState(isTxtClosed);

  const [bioBr, a] = useTypewriter({
    words: [
      "Olá, meu nome é Caio Barroso, e gostaria de te desejar boas vindas ao meu site! Aqui você verá um pouco mais sobre mim.. Ah, e não se preocupe por não ter conseguido consertar o nosso servidor, você não foi o(a) único(a). Mas sempre existe um plano B! Pode deixar que eu resolvo isso pra você rapidinho.. A aplicação será retomada em poucos instantes e você poderá ver o restante do site.",
    ],
    typeSpeed: 32,
  });

  const [bioUs, b] = useTypewriter({
    words: [
      "Hello, my name is Caio Barroso, and I would like to welcome you to my website! Here you will see a little more about me.. Oh, and don't worry about not being able to fix our server, you weren't the only one. But there is always a plan B! Let me solve it for you quickly.. The application will resume in a few moments and you will be able to see the rest of the site.",
    ],
    typeSpeed: 32,
  });

  return (
    <div
      className={`${
        !txtClosed ? "hidden" : "flex"
      } flex px-6 py-4 text-LG sm:text-2xl text-white font-robotoRegular`}
    >
      <h1 className="">{br ? bioBr : bioUs}</h1>
    </div>
  );
}

export default Notepad;
