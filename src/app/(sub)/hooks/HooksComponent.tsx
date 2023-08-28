"use client";

import {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import UseBoolean from "./useBoolean";
export default function HooksComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const hooksProperty = [
    {
      name: "useBoolean",
      text: "- state 상태저장에서 boolean값과 이를 업데이트 하기 위한 set함수가 있는 객체를 반환한다.",
    },
  ];

  const ReturnComponent = (name: string) => {
    switch (name) {
      case "useBoolean":
        return <UseBoolean />;

      default:
        return;
    }
  };
  return (
    <Box p={6}>
      {hooksProperty.map((hook, idx) => {
        return (
          <>
            <Text fontSize="2xl" color="teal.700" fontWeight={700}>
              {`실습: ${hook.name}`}
            </Text>
            <Text fontSize="md">{hook.text}</Text>
            {ReturnComponent(hook.name)}
            <Box py={10}>
              <Divider />
            </Box>
          </>
        );
      })}
    </Box>
  );
}
