"use client";

import {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";

export default function InputComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  const inputWidthBreakpoints = {
    base: "100%", // "0em" : 0px
    md: "70%", // "48em": 768px
    xl: "50%", // "80em": 1280px
  };

  // 버튼 스타일 묶음
  const buttonCommonSx = {
    w: "100%",
    mt: "4",
    bg: colorMode === "dark" ? "#000000" : "#fffffff",
    color: colorMode === "dark" ? "#ffffff" : "#000000",
    border: colorMode === "dark" ? "none" : "1px solid #000000",
    textAlign: "center",
    fontWeight: "medium",
    transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
    _hover:
      colorMode === "dark"
        ? { color: "#001369", bg: "#ffffff" }
        : { bg: "#001369", color: "#ffffff" },
    _focus: { bg: "#001369", color: "#ffffff" },
    _active: {
      bg: "#599cff",
      transform: "scale(0.95)",
      borderColor: "#bec3c9",
    },
  };

  /***
   * input component의 size -> default : md
   * xs: 24px
   * sm: 32px
   * md: 40px
   * lg: 48px
   */
  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        Input Box 실습
      </Text>

      <Stack spacing={4} w={inputWidthBreakpoints}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" focusBorderColor="red.600" isRequired />
          <InputRightAddon children=".com" />
        </InputGroup>
      </Stack>

      <Button sx={buttonCommonSx}>유효성 검사</Button>

      <Box py={10}>
        <Divider />
      </Box>
    </Box>
  );
}
