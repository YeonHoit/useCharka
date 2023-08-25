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
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
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

  const [input, setInput] = useState("");
  const handleInputChange = (e: any) => setInput(e.target.value);
  const isError = input === "";

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

  {
    /***
     * Chakra UI는 양식 제어를 위해 4가지 구성 요소를 내보냅니다.
      - FormControl: 모든 하위 항목에 대한 컨텍스트와 기능을 제공하는 Wrapper
      - FormLabel: 양식 섹션의 레이블  htmlFor childern에 대한 입력에 대해서는, 기본으로 설정됨.
      - FormHelperText: 사용자에게 Form section에 대한 자세한 내용을 알려주는 메시지입니다.
      - FormErrorMessage: 오류 발생 시 나타나는 메시지입니다.
    */
  }
  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        Input Box 실습
      </Text>
      <Stack spacing={4} w={inputWidthBreakpoints}>
        {/* 휴대폰 전화번호 입력 */}
        <FormControl>
          <FormLabel htmlFor="phoneGo">PhoneNumber</FormLabel>
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
              id="phoneGo"
              placeholder="phone number"
              value={phoneNumberValue}
              onChange={(e) =>
                setPhoneNumerValue(e.currentTarget.value.toString())
              }
            />
          </InputGroup>
        </FormControl>

        {/* DateInput: date, dateTime */}
        <FormControl>
          <FormLabel htmlFor="dateGo">Date</FormLabel>
          <Input
            id="dateGo"
            placeholder="Select Date"
            size="md"
            type="date"
            value={dateValue || undefined}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const value = e.currentTarget.value;
              setDateValue(value);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="dateTimeGo">dateTime</FormLabel>
          <Input
            id="dateTimeGo"
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            value={dateTimeValue || undefined}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const value = e.currentTarget.value;
              setDateTimeValue(value);
            }}
          />
        </FormControl>

        {/* 필수: 사이트 입력: size: sm, md, lg */}
        {/* 
         - If you add the size prop to `InputGroup`, it'll pass it to all its children.
         -  "size prop" 프로퍼티는 InputGroup의 모든 자식 요소로 전달된다고 설명한다.
            이는 InputGroup 컴포넌트의 모든 자식 요소들이 동일한 크기 설정을 공유하게 한다. 
            이는 디자인의 일관성을 유지하고 코드 반복을 줄이는 데 도움을 준다.
         */}
        <FormControl>
          <FormLabel htmlFor="SiteGo">URL</FormLabel>
          <InputGroup size="md">
            <InputLeftAddon children="https://" />
            <Input
              id="SiteGo"
              placeholder="mysite"
              // input box는 따로 focus 색상을 결정할 수 있음
              focusBorderColor="red.600"
              isRequired
              value={siteValue}
              onChange={(e) => setSiteValue(e.currentTarget.value.toString())}
            />
            <InputRightAddon children=".com" />
          </InputGroup>
        </FormControl>

        {/* 필수: 비밀번호 입력*/}
        <FormControl>
          <FormLabel htmlFor="passwordGo">PW</FormLabel>{" "}
          <InputGroup size="md">
            <Input
              id="passwordGo"
              placeholder="Enter password"
              // input box는 따로 focus 색상을 결정할 수 있음
              focusBorderColor="teal.600"
              isRequired
              type={show ? "text" : "password"}
              value={passWordValue}
              onChange={(e) =>
                setPassWordValue(e.currentTarget.value.toString())
              }
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
        </FormControl>

        <FormControl isInvalid={isError}>
          <FormLabel htmlFor="emailGo">Email</FormLabel>
          <Input
            id="emailGo"
            type="email"
            value={input}
            onChange={handleInputChange}
          />
          {!isError ? (
            <FormHelperText>
              소식을 받을 이메일을 입력해주세요 ^0^
            </FormHelperText>
          ) : (
            <FormErrorMessage>이메일 입력해라</FormErrorMessage>
          )}
        </FormControl>
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
