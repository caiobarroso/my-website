import { atom } from "recoil";

const language = atom({
  key: "lang",
  default: "pt-BR",
});

const isValid = atom({
  key: "valid",
  default: false,
});

const isTwoClosed = atom({
  key: "tabTwo",
  default: false,
});

const isNormal = atom({
  key: "isNormal",
  default: false,
});

const loading = atom({
  key: "loading",
  default: false,
});

const isTxtClosed = atom({
  key: "txt",
  default: true,
});

export { language, isValid, isTwoClosed, isNormal, loading, isTxtClosed };
