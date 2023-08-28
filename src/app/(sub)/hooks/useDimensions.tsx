"use client";

import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  useBoolean,
  useColorMode,
  useDimensions,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function UseDimensions() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  // 어느 박스요소의 치수를 잴것인지에 대한 참조ref 필요
  const elementRef = useRef<any>(null);
  const elementRef2 = useRef<any>(null);

  // 박스요소 ref를 인자로 넣은 치수객체 반환
  // -> true를 넣으면? 리사이즈 및 스크롤 이벤트를 창(window) 객체에 연결하여,
  //    페이지의 스크롤이나 리사이즈가 발생할 때 참조 요소(reference element)의 크기를 다시 계산: 반응형 필수요소

  const dimensions = useDimensions(elementRef);
  const dimensions2 = useDimensions(elementRef2, true);

  const boxSx = {
    w: "100%",
    border: "1px solid #dbdbdb",
    ml: "4px",
  };

  const btnSx = {
    w: "100px",
    h: "auto",
    py: 2,
    bg: "teal.100",
  };

  /**
   *
   * return value | contents
   * marginBox |	top, right, bottom, left, width, height, x, y, center (x, y)
   * borderBox |	top, right, bottom, left, width, height, x, y, center (x, y)
   * paddingBox	| top, right, bottom, left, width, height, x, y, center (x, y)
   * contentBox	| top, right, bottom, left, width, height, x, y, center (x, y)
   * border	| top, right, bottom, left
   * padding | top, right, bottom, left
   * margin	| top, right, bottom, left
   *
   *
   * 박스모델 종류 4가지
   * marginBox: marginBox는 요소의 외부 여백(margin)을 포함한 전체 영역을 나타냅니다. 여기에는 요소의 테두리(border)와 내부 내용(content)까지 포함됩니다.
   * paddingBox: paddingBox는 요소의 내부 여백(padding)을 포함한 영역을 나타냅니다. 여기에는 요소의 테두리(border)와 내용(content)까지 포함됩니다.
   * borderBox: borderBox는 요소의 테두리(border)를 포함한 영역을 나타냅니다. 여기에는 요소의 내용(content)까지 포함됩니다. 요소의 크기를 지정할 때는 이 borderBox 크기가 기본적으로 사용됩니다.
   * contentBox: contentBox는 요소의 내용(content)을 나타내는 영역을 나타냅니다. 여기에는 요소의 텍스트나 이미지와 같은 실제 내용이 들어갑니다. 내용 영역은 내부 여백(padding)과 테두리(border)를 포함하지 않습니다.
   */

  useEffect(() => {
    if (elementRef.current) {
      //console.log("dimensions", dimensions);
    }
    if (elementRef2.current) {
      console.log("dimensions2", dimensions2);
    }
  }, [elementRef.current, elementRef2.current]);
  return (
    <>
      {/* NoneSx: margin, border, padding 모두 없으면 borderBox, contentBox, marginBox, paddingBox 모두 동일 */}
      <Box ref={elementRef} color="white" width="fit-content" bg="blue.700">
        <Heading>
          <code>Box</code> dimensions Example
        </Heading>
        <List>
          <ListItem>
            The Width: {dimensions && dimensions.borderBox.width}
          </ListItem>
          <ListItem>
            {/* 상위 부모때문에 기본 21px로 패딩이 있음 */}
            The x coordinate: {dimensions && dimensions.borderBox.x}
          </ListItem>
        </List>
      </Box>

      {/* Sx */}
      <Box>
        <Box ref={elementRef2} color="white" bg="blue.700" sx={boxSx}>
          <Heading>
            <code>Box2</code> dimensions Example
          </Heading>
          <List>
            <ListItem>
              The Width: {dimensions2 && dimensions2.borderBox.width}
            </ListItem>
            <ListItem>
              {/* 기본 21px로 패딩이 있고, boxSx에 ml="4px"가 있어서 25px */}
              The x coordinate: {dimensions2 && dimensions2.borderBox.x}
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
