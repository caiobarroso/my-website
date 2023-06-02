import { atom } from "recoil";

const language = atom({
  key: "lang",
  default: "pt-BR",
});

const isValid = atom({
  key: "valid",
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

const tabSelected = atom({
  key: "selected",
  default: 1,
});

export { language, isValid, isNormal, loading, tabSelected };
