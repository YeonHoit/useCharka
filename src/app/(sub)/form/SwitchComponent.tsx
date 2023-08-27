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
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Text,
  VisuallyHidden,
  border,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
export default function SwitchComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const textSx = {
    w: "auto",
    color: colorMode === "dark" ? "white" : "black",
    bg: colorMode === "dark" ? "black" : "white",
    m: 0,
  };

  useEffect(() => {
    // console.log("체크되었는가? ", isOpen);
  }, [isOpen]);

  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        스위치 실습
      </Text>

      <Stack align="center" direction="row">
        <Text sx={textSx}>비공개</Text>
        <Switch
          htmlFor="toggleEmail"
          id="toggleEmail"
          size="md"
          // colorScheme="teal"
          aria-label={`이메일 공개여부 스위치: ${
            isOpen ? "선택됨" : "선택안됨"
          }`}
          colorScheme="purple"
          isChecked={isOpen}
          onChange={() => setIsOpen((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }
          }}
        >
          <VisuallyHidden>이메일 공개여부 선택</VisuallyHidden>
        </Switch>
        <Text sx={textSx}>공개</Text>
      </Stack>

      <Box py={10}>
        <Divider />
      </Box>
    </Box>
  );
}
