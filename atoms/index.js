import { atom } from "recoil";

export const isPortuguese = atom({
  key: "portuguese",
  default: true,
});

export const isValid = atom({
  key: "valid",
  default: false,
});

export const isTwoClosed = atom({
  key: "tabTwo",
  default: false,
});

export const isNormal = atom({
  key: "isNormal",
  default: false,
});

export const loading = atom({
  key: "loading",
  default: false,
});

export const isTxtClosed = atom({
  key: "txt",
  default: true,
});
