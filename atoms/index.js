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
