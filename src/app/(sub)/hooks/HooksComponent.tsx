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
import UseDimensions from "./useDimensions";
import UseDisclosure from "./useDisclosure";
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
    {
      name: "useDimensions",
      text: "- Box Model의 element에 대한 참조된 요소의 치수를 측정한다.",
    },
    {
      name: "useDisclosure",
      text: "- Open/Close 동작을 포함하는 Modal, AlertDialog, Drawer같은 피드백 컴포넌트 요소를 제어할 때 사용한다.",
    },
  ];

  const ReturnComponent = (name: string) => {
    switch (name) {
      case "useBoolean":
        return <UseBoolean />;
      case "useDimensions":
        return <UseDimensions />;
      case "useDisclosure":
        return <UseDisclosure />;
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
