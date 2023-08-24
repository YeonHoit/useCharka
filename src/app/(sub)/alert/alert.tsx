"use client";

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Slide,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AlertDialogComponent from "./alertDialog";

export default function AlertComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const [showAlert, setShowAlert] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const alertSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonSx =
    colorMode === "light"
      ? {
          color: "#000000",
          bg: "#dbdbdb",
        }
      : {
          bg: "#000000",
          color: "#dbdbdb",
        };

  return (
    <Box p={6} sx={alertSx}>
      {/* <Alert /> 컴포넌트 */}
      <Alert
        status="success"
        variant="solid"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="auto"
        mb={10}
      >
        {/* <AlertIcon/> 컴포넌트는 <Alert/>에 전달된 status에 따라 자동 변환됨 */}
        <AlertIcon boxSize="24px" mr={0} />
        <AlertTitle mt={4} mb={2} fontSize="lg">
          제출이 완료되었습니다.
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          메인 페이지로 눈치껏 알아서 이동해주세요.
        </AlertDescription>
      </Alert>
      {/* Stack: 스택은 요소를 그룹화하고 요소 사이에 공백을 적용하는 데 사용되는 레이아웃 구성 요소 */}
      <Stack spacing={3} mb={10}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>

      {/* Alert Dialog */}
      <AlertDialogComponent />
    </Box>
  );
}
