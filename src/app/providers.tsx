"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const theme = extendTheme({
    config,
    bg: {
      purple: {
        light: "#7F5AD5",
        dark: "#C7A8F7",
      },
      teal: {
        light: "#319795",
        dark: "#81E6D9",
      },
      cyan: {
        light: "#00B5D8",
        dark: "#9DECF9",
      },
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: "top-left" } }} // toast 표시 위치 전역 설정
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
