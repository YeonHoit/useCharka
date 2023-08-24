"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function AccordIconComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  const accordionItemProperty = [
    {
      title: "Section 1 Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat 1.",
    },
    {
      title: "Section 2 Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat 2.",
    },
    {
      title: "Section 3 Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat 3.",
    },
  ];

  /**
   * 아코디언 패널의 스타일 묶음
   */
  const accordionPanelBoxSx = {
    w: "100%",
    h: "auto",
    borderTop: "1px solid #dbdbdb",
    borderBottom: "1px solid #dbdbdb",
    mt: "5px",

    bg: colorMode === "light" ? "#ffffff" : "#001369",
    color: colorMode === "light" ? "#001369" : "#ffffff",
  };

  /**
   *
   * allowMultiple: 여러 아코디언 항목을 확장 가능하게 함
   * allowToggle: 확장된 다른 아코디언을 토글 형식으로 접히게 함
   * defaultIndex: 확장된 아코디언 항목의 초기 인덱스
   */
  return (
    <Box p={6}>
      <Accordion
        // defaultIndex={[0]}
        allowMultiple
      >
        {accordionItemProperty.map((item, idx) => {
          return (
            <AccordionItem key={idx} p={2} my={2} border="1px solid #dbdbdb">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel sx={accordionPanelBoxSx}>
                {item.text}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
}
