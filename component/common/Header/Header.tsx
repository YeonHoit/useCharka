"use client";

import { Box, Button, Text, useColorMode } from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={5} textAlign={"center"} bg="#00C7AF">
      <Button
        onClick={toggleColorMode}
        bg={colorMode === "light" ? "#ffffff" : "#001369"}
        _hover={
          colorMode === "light"
            ? {
                color: "#dbdbdb",
                bg: "#599cff",
              }
            : {
                color: "#011e4b",
                bg: "#dbdbdb",
              }
        }
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}
