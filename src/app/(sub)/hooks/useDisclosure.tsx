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
  useBoolean,
  useColorMode,
  useDimensions,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function UseDisclosure() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen, // 제어 구성요소의 상태: true/false
    onOpen, // 제어 구성요소의 상태를 true로 변경하는 함수 (useBoolean에서의 setState.on)
    onClose, // 제어 구성요소의 상태를 false로 변경하는 함수 (useBoolean에서의 setState.off)
    onToggle, // 매개변수 값을 전환하는 콜백 함수 (useBoolean에서의 setState.toggle)
    getDisclosureProps, // 제어되는 구성요소에 대한 props 세트를 검색하는 콜백 함수
    getButtonProps, // isOpen을 트리거하는 버튼에 대한 props 세트를 검색하는 콜백 함수
  } = useDisclosure();

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

  // 그 밖의 사용되지 않은 요소
  useEffect(() => {
    // console.log("onToggle: ", onToggle);
    // console.log("getDisclosureProps: ", getDisclosureProps);
    // console.log("getButtonProps: ", getButtonProps);
  }, []);

  return (
    <>
      <Box sx={boxSx}>
        <Button onClick={onOpen}>Open Drawer</Button>

        {/* 사용 자체는 문제없으나 위 onOpen 사용을 추천 */}
        {/* <Button onClick={onToggle}>Toggle Drawer</Button> */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerCloseButton>
              <CloseIcon role="img" />
            </DrawerCloseButton>

            <DrawerBody>
              <p>현재는 onOpen 함수로 isOpen state가 true인 상태이다.</p>
              <Divider mb={4} />
              <p>
                Overlay 영역이나, DrawerCloseButton을 누르면 onClose함수가
                사용되어 isOpen state가 false상태가 된다.
              </p>
              <Divider mb={4} />

              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
