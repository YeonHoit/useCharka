"use client";

import {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
export default function CheckboxComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  const checkboxProperty = [
    { text: "사과" },
    { text: "바나나" },
    { text: "포도" },
    { text: "오렌지" },
  ];

  const [checkedItems, setCheckedItems] = useState(
    checkboxProperty.map((item) => {
      return false;
    })
  );

  // 모두 선택되었는지를 판단
  const allChecked = checkedItems.every(Boolean);

  /**
   * 이 체크박스가 선택된 하위 체크박스들 중 일부만 선택된 경우, 부분 선택 상태를 나타내기 위해 isIndeterminate 프로퍼티를 사용합니다.
   * checkedItems.some(Boolean): checkedItems 배열 내에 true 값이 적어도 하나 존재한다면, some 함수는 true를 반환합니다. 이는 하나 이상의 체크박스가 선택된 상태인지를 나타냅니다.
   * !allChecked: allChecked는 checkedItems 배열의 모든 요소가 true인 경우 true로 설정됩니다. !allChecked는 이 값의 부정을 나타내므로, 모든 체크박스가 선택되지 않은 상태인지를 나타냅니다.
   * */
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  useEffect(() => {
    // console.log("아이템 리스트", checkedItems);
    // console.log("모두 선택되었는가?", allChecked);
    // console.log("부분만 선택되었는가?", isIndeterminate);
  }, [checkedItems]);

  return (
    <Box p={6}>
      <Text fontSize="2xl" color="teal.700" fontWeight={700}>
        체크박스 실습
      </Text>
      <Checkbox
        size="md"
        mb={2}
        aria-label="전체 선택"
        borderColor={colorMode === "light" ? "gray.300" : "whiteAlpha.400"}
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => {
          setCheckedItems(
            checkedItems.map((_) => {
              return e.target.checked;
            })
          );
        }}
        // enter키 입력 시, boolean값 반전
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCheckedItems(
              checkedItems.map((_) => {
                return !allChecked;
              })
            );
          }
        }}
      >
        전체 선택
      </Checkbox>
      <Stack spacing={5} direction="row">
        {checkboxProperty.map((item, idx) => {
          return (
            <Checkbox
              key={idx}
              icon={<CheckIcon role="img" />}
              size="md"
              aria-label={`${item.text} 선택`}
              isChecked={checkedItems[idx]}
              onChange={(e) => {
                const newCheckedList = checkedItems.map((item, idx2) => {
                  if (idx === idx2) {
                    return e.target.checked;
                  } else {
                    return item;
                  }
                });

                setCheckedItems(newCheckedList);
              }}
              // enter키 입력 시, boolean값 반전
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const newCheckedList = checkedItems.map((item, idx2) => {
                    if (idx === idx2) {
                      return !item;
                    } else {
                      return item;
                    }
                  });

                  setCheckedItems(newCheckedList);
                }
              }}
              borderColor={
                colorMode === "light" ? "gray.300" : "whiteAlpha.400"
              }
            >
              {item.text}
            </Checkbox>
          );
        })}
      </Stack>

      <Box py={10}>
        <Divider />
      </Box>
    </Box>
  );
}
