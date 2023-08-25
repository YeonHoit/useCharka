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
export default function RadioComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const radioProperty = [
    { text: "사과" },
    { text: "바나나" },
    { text: "포도" },
    { text: "오렌지" },
  ];

  // defaultValue가 들어간다.
  const [value, setValue] = useState<string>("포도");

  useEffect(() => {
    console.log("값 변경: ", value);
  }, [value]);
  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        라디오 버튼 실습 (라디오는 좌우 키패드로 선택 전환)
      </Text>

      <RadioGroup
        name="과일"
        onChange={setValue}
        value={value}
        // defaultValue="포도"
      >
        <Stack spacing={4} direction="row">
          {radioProperty.map((item, idx) => {
            return (
              <Radio
                key={item.text}
                value={item.text}
                borderColor={
                  colorMode === "light" ? "gray.300" : "whiteAlpha.400"
                }
              >
                {item.text}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>

      <Box py={10}>
        <Divider />
      </Box>
    </Box>
  );
}
