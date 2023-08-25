"use client";

import {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Radio,
  RadioGroup,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, PhoneIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import moment from "moment";

export default function InputComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  // alert dialog
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>(null);

  // Input 스타일 (width)
  const inputWidthBreakpoints = {
    base: "100%", // "0em" : 0px
    md: "70%", // "48em": 768px
    xl: "50%", // "80em": 1280px
  };

  // 버튼 스타일 묶음
  const buttonCommonSx = {
    w: "100%",
    mt: "4",
    bg: colorMode === "dark" ? "#000000" : "#fffffff",
    color: colorMode === "dark" ? "#ffffff" : "#000000",
    border: colorMode === "dark" ? "none" : "1px solid #000000",
    textAlign: "center",
    fontWeight: "medium",
    transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
    _hover:
      colorMode === "dark"
        ? { color: "#001369", bg: "#ffffff" }
        : { bg: "#001369", color: "#ffffff" },
    _focus: { bg: "#001369", color: "#ffffff" },
    _active: {
      bg: "#599cff",
      transform: "scale(0.95)",
      borderColor: "#bec3c9",
    },
  };

  // 휴대폰
  const [phoneNumberValue, setPhoneNumerValue] = useState<string>("");

  // Date/DateTime
  const [dateValue, setDateValue] = useState<string | undefined>(undefined);
  const [dateTimeValue, setDateTimeValue] = useState<string | undefined>(
    undefined
  );

  // 사이트
  const [siteValue, setSiteValue] = useState<string>("");

  // 패스워드
  const [passWordValue, setPassWordValue] = useState<string>("");

  // 패스워드 show/hide 수정
  const [show, setShow] = useState<boolean>(false);

  // alertDialog text
  const [alertText, setAlertText] = useState<string>("");

  useEffect(() => {
    console.log("dateValue", dateValue);
    console.log("dateTimeValue", dateTimeValue);
  }, [dateValue, dateTimeValue]);
  /***
   * input component의 size -> default : md
   * xs: 24px
   * sm: 32px
   * md: 40px
   * lg: 48px
   */
  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        Input Box 실습
      </Text>
      <Stack spacing={4} w={inputWidthBreakpoints}>
        {/* 휴대폰 전화번호 입력 */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>

          {/* Left Element를 넣는 다른 방법 */}
          {/* <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          /> */}

          <Input
            type="tel"
            placeholder="phone number"
            value={phoneNumberValue}
            onChange={(e) =>
              setPhoneNumerValue(e.currentTarget.value.toString())
            }
          />
        </InputGroup>

        {/* DateInput: date, dateTime */}
        <Input
          placeholder="Select Date"
          size="md"
          type="date"
          value={dateValue || undefined}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            setDateValue(value);
          }}
        />

        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          value={dateTimeValue || undefined}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            setDateTimeValue(value);
          }}
        />

        {/* 필수: 사이트 입력: size: sm, md, lg */}
        {/* 
         - If you add the size prop to `InputGroup`, it'll pass it to all its children.
         -  "size prop" 프로퍼티는 InputGroup의 모든 자식 요소로 전달된다고 설명한다.
            이는 InputGroup 컴포넌트의 모든 자식 요소들이 동일한 크기 설정을 공유하게 한다. 
            이는 디자인의 일관성을 유지하고 코드 반복을 줄이는 데 도움을 준다.
         */}
        <InputGroup size="md">
          <InputLeftAddon children="https://" />
          <Input
            placeholder="mysite"
            // input box는 따로 focus 색상을 결정할 수 있음
            focusBorderColor="red.600"
            isRequired
            value={siteValue}
            onChange={(e) => setSiteValue(e.currentTarget.value.toString())}
          />
          <InputRightAddon children=".com" />
        </InputGroup>

        {/* 필수: 비밀번호 입력*/}
        <InputGroup size="md">
          <Input
            placeholder="Enter password"
            // input box는 따로 focus 색상을 결정할 수 있음
            focusBorderColor="teal.600"
            isRequired
            type={show ? "text" : "password"}
            value={passWordValue}
            onChange={(e) => setPassWordValue(e.currentTarget.value.toString())}
          />
          <InputRightElement width="3rem">
            <Button
              h="2rem"
              size="sm"
              bg={"gray.300"}
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Button
        sx={buttonCommonSx}
        onClick={() => {
          if (!siteValue.length || !passWordValue.length) {
            onOpen();

            if (!siteValue.length && !passWordValue.length) {
              setAlertText("사이트 주소와 패스워드가 입력되지 않았습니다.");
            } else if (!siteValue.length) {
              setAlertText("사이트 주소가 입력되지 않았습니다.");
            } else {
              setAlertText("패스워드가 입력되지 않았습니다.");
            }
          }
        }}
      >
        유효성 검사
      </Button>

      {/* 필수값이 입력되지 않았을 때, 띄울 Alert */}
      <AlertDialog
        // 어디서 다이얼로그가 날아오느냐? (애니메이션)
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>경고</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{alertText}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              colorScheme="teal.500"
              border={"1px solid #000000"}
              color={"#000000"}
              _hover={
                colorMode === "dark"
                  ? { color: "black", bg: "gray.100", borderColor: "white" }
                  : { bg: "blackAlpha.800", color: "#ffffff" }
              }
              onClick={() => {
                onClose();
              }}
            >
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Box py={10}>
        <Divider />
      </Box>
    </Box>
  );
}
