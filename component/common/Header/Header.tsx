"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormLabel,
  Highlight,
  IconButton,
  Input,
  Select,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  //modal이나 drawer등에 사용할 수 있도록 구성된 hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>(null);
  const [mood, setMood] = useState("");
  const [text, setText] = useState<string>("");

  return (
    <Box p={5} textAlign={"right"} bg="#00C7AF">
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
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        ml={3}
        aria-label="drawer_botton"
        icon={<HamburgerIcon />}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color={colorMode === "dark" ? "white" : "black"}>
          <DrawerCloseButton />
          <DrawerHeader>Chakra Test</DrawerHeader>
          <DrawerBody display={"flex"} gap={5} flexDirection={"column"}>
            <Input
              p={3}
              fontSize={18}
              placeholder="이름을 입력해주세요."
              onChange={(e) => {
                setText(e.currentTarget.value);
              }}
              value={text}
            />
            <Box fontSize={18} mt={6}>
              <Highlight
                query={text}
                styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
              >
                {text !== "" ? "반갑습니다! " + text + "님" : "반갑습니다! "}
              </Highlight>
            </Box>
            <Box mt={6}>
              <FormLabel htmlFor="mood" fontSize={18}>
                오늘의 기분은?{" "}
                {mood === "good" ? "🙂" : mood === "soso" ? "😐" : "😞"}
              </FormLabel>
              <Select
                id="mood"
                defaultValue="good"
                onChange={(e) => {
                  setMood(e.target.value);
                }}
              >
                <option value="good">좋음</option>
                <option value="soso">무난함</option>
                <option value="bad">나쁨</option>
              </Select>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
