import { useColorMode } from "@chakra-ui/react";
import { atom } from "recoil";

export const mainBoxState = atom({
  key: "mainBox",
  default: {},
});
