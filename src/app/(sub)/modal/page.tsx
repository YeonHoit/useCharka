"use client";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
const ModalPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);

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
        : { bg: "blackAlpha.800Alpha.800", color: "#ffffff" },
    _focus:
      colorMode === "dark"
        ? { bg: "blackAlpha.400", color: "white" }
        : { bg: "blackAlpha.400", color: "white" },
    _active:
      colorMode === "dark"
        ? {
            bg: "blackAlpha.800Alpha.800",
            transform: "scale(0.95)",
            borderColor: "#bec3c9",
          }
        : { bg: "gray.100", transform: "scale(0.95)", borderColor: "#bec3c9" },
  };

  const modalBoxSx = {
    w: "100%",
    p: "10",
    color: colorMode === "dark" ? "white" : "blackAlpha.800",
  };

  const boxSx = {
    w: "50%",
    color: colorMode === "dark" ? "gray.50" : "blackAlpha.800Alpha.800",
    bg: colorMode === "dark" ? "blackAlpha.800Alpha.800" : "gray.50",
  };
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box p={10} sx={boxSx}>
          <Button
            w={"50%"}
            bg={"blackAlpha.800Alpha.300"}
            onClick={onOpen}
            sx={btnSx}
          >
            {" "}
            모달 열기
          </Button>
          {/* ref에 finalRef를 준 곳으로 팝업 닫힌 후 초점이 이동 */}
          <Button sx={btnSx} ref={finalRef}>
            포커스 이동 테스트용 버튼
          </Button>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent sx={modalBoxSx}>
          <ModalHeader>모달 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>예시 내용</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} sx={btnSx}>
              Close
            </Button>
            {/* ref에 Initialfocus를 준 곳으로 첫 초점이 이동 */}
            <Button sx={btnSx} ref={initialRef}>
              Initial focus
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPage;
