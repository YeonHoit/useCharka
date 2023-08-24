"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  extendTheme,
  localStorageManager,
} from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = extendTheme({
    initialColorMode: "dark", // 'dark' | 'light'
    useSystemColorMode: false,
    components: {
      Button: {
        baseStyle: {
          _focus: {
            boxShadow: "0 0 0 3px rgba(255, 59, 59, 0.6)", // 변경할 아웃라인 색상 설정
          },
        },
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
