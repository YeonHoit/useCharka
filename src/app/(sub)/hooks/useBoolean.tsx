"use client";

import { Box, Button, useBoolean, useColorMode } from "@chakra-ui/react";

export default function UseBoolean() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const [flag, setFlag] = useBoolean();
  const [flag2, setFlag2] = useBoolean();

  const boxSx = {
    w: "100%",
    border: "1px solid #dbdbdb",
    p: 4,
    my: 4,
  };

  const btnSx = {
    w: "100px",
    h: "auto",
    py: 2,
    bg: "teal.100",
  };

  // 1. useBoolean에서의 setState.toggle은 useState의 setState((prev)=>!prev)와 동일하다
  // 2. useBoolean에서의 setState.on / setState.off는 useState의 setState(true), setState(false)와 동일하다.
  return (
    <>
      <Box sx={boxSx}>
        <p>Boolean state: {flag.toString()}</p>
        <Button onClick={setFlag.toggle} sx={btnSx}>
          토글 수행
        </Button>
      </Box>
      <Box sx={boxSx}>
        {/* 
         - 마우스가 올라가면 : setFlag2(true), 반대면 setFlag2(false)
         */}
        <Box
          onMouseEnter={setFlag2.on}
          onMouseLeave={setFlag2.off}
          bg={"red.200"}
          p={2}
        >
          {flag2 ? "The flag is ON!" : "Hover me to turn ON"}
        </Box>
      </Box>
    </>
  );
}
