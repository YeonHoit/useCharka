"use client";

import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
import { useRef } from "react";

export default function AlertDialogComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const cancelRef = useRef<any>(null);
  const focusRef = useRef<any>(null);
  const btnSx = {
    w: "100%",
    mt: "4",
    py: "6",
    bg: colorMode === "dark" ? "white" : "blackAlpha.800",
    color: colorMode === "dark" ? "gray.700" : "white",
    border: "1px",
    borderColor: "gray.700",
    _hover:
      colorMode === "dark"
        ? { color: "white", bg: "gray.400", borderColor: "white" }
        : { bg: "blackAlpha.800", color: "#ffffff" },
    _focus:
      colorMode === "dark"
        ? { bg: "blackAlpha.400", color: "white" }
        : { bg: "blackAlpha.400", color: "white" },
    _active:
      colorMode === "dark"
        ? {
            bg: "blackAlpha.800",
            transform: "scale(0.95)",
            borderColor: "#bec3c9",
          }
        : { bg: "gray.100", transform: "scale(0.95)", borderColor: "#bec3c9" },
  };
  return (
    <>
      <Button onClick={onOpen} sx={btnSx}>
        Discard
      </Button>

      {/* 최초 삭제 여부 알림용 <AlertDialog/> */}
      <AlertDialog
        // 어디서 다이얼로그가 날아오느냐? (애니메이션)
        motionPreset="slideInBottom"
        /**
         * 이 문장은 웹 접근성을 향상시키기 위한 WAI-ARIA (웹 접근성 이니셔티브 - 접근성 관련 정보 및 기술) 사양을 기반으로 한 내용입니다.
         * "Dialog"이라는 대화 상자가 열릴 때, 사용자가 실수로 중요한 작업을 수행하는 것을 방지하기 위해 초점이 가장 파괴적인 작업이 아닌 요소에 위치해야 함을 의미합니다.
         * 예를 들어, 삭제 작업을 확인하는 대화 상자가 있다고 가정해보겠습니다. 이 대화 상자가 열릴 때 초점은 '삭제' 버튼에 가지지 않고,
         * '취소' 버튼에 가지도록 해야 사용자가 실수로 삭제 작업을 실행하지 않게 됩니다.
         * 이러한 방식으로 사용자가 중요한 작업을 실수로 수행하는 것을 방지할 수 있습니다.
         */
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        // AlertDialog가 어디에 위치하여야 하는가?
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>삭제하시겠습니까?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>이 작업은 되돌릴 수 없습니다.</AlertDialogBody>
          <AlertDialogFooter>
            {/* '아니오' 버튼으로 포커스가 가야 <AlertDialog/> 컴포넌트의 leastDestructiveRef 옵션이 의미가 있다.*/}
            <Button onClick={onClose} ref={cancelRef}>
              아니오
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => {
                onClose();
                onOpen2();
              }}
            >
              네
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 삭제 결과 확인 알림용 <AlertDialog/> */}
      <AlertDialog
        // 어디서 다이얼로그가 날아오느냐? (애니메이션)
        motionPreset="slideInBottom"
        /**
         * 이 문장은 웹 접근성을 향상시키기 위한 WAI-ARIA (웹 접근성 이니셔티브 - 접근성 관련 정보 및 기술) 사양을 기반으로 한 내용입니다.
         * "Dialog"이라는 대화 상자가 열릴 때, 사용자가 실수로 중요한 작업을 수행하는 것을 방지하기 위해 초점이 가장 파괴적인 작업이 아닌 요소에 위치해야 함을 의미합니다.
         * 예를 들어, 삭제 작업을 확인하는 대화 상자가 있다고 가정해보겠습니다. 이 대화 상자가 열릴 때 초점은 '삭제' 버튼에 가지지 않고,
         * '취소' 버튼에 가지도록 해야 사용자가 실수로 삭제 작업을 실행하지 않게 됩니다.
         * 이러한 방식으로 사용자가 중요한 작업을 실수로 수행하는 것을 방지할 수 있습니다.
         */
        leastDestructiveRef={focusRef}
        onClose={onClose2}
        isOpen={isOpen2}
        // AlertDialog가 어디에 위치하여야 하는가?
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>작업완료</AlertDialogHeader>
          <AlertDialogCloseButton ref={focusRef} />
          <AlertDialogBody>삭제가 완료되었습니다.</AlertDialogBody>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
