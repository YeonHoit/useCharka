"use client";

import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  List,
  ListItem,
  Text,
  useBoolean,
  useColorMode,
  useDimensions,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function UseMediaQuery() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  // 옵션이 없는 단일 미디어 쿼리
  // 이렇게 사용하면 isLargerThan800 변수는 현재 화면 크기가 1280px보다 큰지 여부에 따라 true 또는 false가
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  // 대체 기능이 있는 SSR 친화적인 미디어 쿼리
  // 이렇게 사용하면 서버에서 실행될 때 ssr 옵션은 fallback 값을 반환할지 또는 쿼리를 직접 실행할지 여부를 결정함
  // 만약 ssr이 true로 설정되어 있고 서버 컨텍스트에 있는 경우에는 fallback 속성이 반환됨
  // 클라이언트 측에서 쿼리를 다시 평가할 때까지 서버에서는 false 값을 반환합니다.

  /**
   * 1. option ssr: 이 옵션은 서버 사이드 렌더링(SSR) 시에 미디어 쿼리를 어떻게 처리할지를 결정합니다.
   * - ssr 옵션을 true로 설정하면 서버에서 페이지를 렌더링할 때, 해당 미디어 쿼리를 실행하지 않고 대신 fallback 속성에 지정한 값이 반환됩니다.
   *
   * 2. option fallback
   * - fallback 속성은 ssr 옵션이 true일 때 사용됩니다.
   * - 서버에서 페이지를 렌더링할 때 해당 미디어 쿼리를 평가할 수 없는 경우(예: 서버에서는 화면 크기를 알 수 없을 때)에는 이 fallback 속성에 지정된 값이 반환됩니다.
   * - false로 설정된 경우 서버에서는 해당 미디어 쿼리를 평가할 수 없다는 의미로, 클라이언트 측에서 페이지가 로드된 후에 다시 미디어 쿼리를 평가하도록 할 수 있습니다.
   
  # 따라서!!
  [ssr: true와 fallback: false를 함께 사용하면]
  서버 사이드 렌더링에서 미디어 쿼리를 처리할 때 초기에는 false 값이 반환되어
  로드 후에 클라이언트 측에서 미디어 쿼리를 다시 평가하게 됩니다. 

  이를 통해 일관된 UI를 유지하면서도 초기 렌더링 속도를 향상시킬 수 있습니다.
  */
  const [isLargerThan800] = useMediaQuery("(최소 너비: 800px)", {
    ssr: true,
    fallback: false, // 서버에서 false를 반환하고 클라이언트 측에서 다시 평가
  });

  // 배열로도 전달가능
  const [isLargerThanHD, isLargerThan1400px, isDisplayingInBrowser] =
    useMediaQuery([
      "(min-width: 1920px)",
      "(min-width: 1400px)",
      "(display-mode: browser)", // 렌더링 완료되면 displaymode가 browser임
    ]);

  const boxSx = {
    w: "100%",
    border: "1px solid #dbdbdb",
    m: 4,
    p: 4,
  };

  const btnSx = {
    w: "100px",
    h: "auto",
    py: 2,
    bg: "teal.100",
  };

  return (
    <>
      <Box sx={boxSx}>
        <Text>
          {isLargerThan1280
            ? "현재 width는 1280px 이상입니다."
            : "현재 width는 1280px 미만입니다."}
        </Text>
        <Text>
          {isLargerThan1400px
            ? "현재 width는 1400px 이상입니다."
            : "현재 width는 1400px 미만입니다."}
        </Text>
        <Text>
          {isLargerThanHD
            ? "현재 width는 1920px 이상입니다."
            : "현재 width는 1920px 미만입니다."}
        </Text>

        {isDisplayingInBrowser ? (
          <Text>"현재 페이지는 렌더링 완료되었습니다."</Text>
        ) : (
          <Text color="red.500">
            "현재 페이지는 아직 렌더링 완료되지 않았습니다"
          </Text>
        )}
      </Box>
    </>
  );
}
