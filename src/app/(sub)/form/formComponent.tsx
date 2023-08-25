"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import CheckboxComponent from "./CheckboxComponent";
import RadioComponent from "./RadioComponent";

export default function FormComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={6}>
      <CheckboxComponent />
      <RadioComponent />
    </Box>
  );
}
