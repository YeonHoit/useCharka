"use client";

import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
      bg="#000000"
      height={90}
    >
      <Text fontSize="md" height={"auto"} color="#cccccc" alignItems="center">
        Footer
      </Text>
    </Box>
  );
}
