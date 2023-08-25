"use client";

import { Box, useRadio, Icon, Flex, Text } from "@chakra-ui/react";
import { MdOutlineModeStandby, MdOutlineLens } from "react-icons/md";

const CustomRadio = (props: any) => {
  const { getInputProps, getRadioProps, state } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} hidden />
      <Flex
        {...checkbox}
        cursor={"pointer"}
        direction={"row"}
        alignItems={"center"}
      >
        <Icon
          as={state.isChecked ? MdOutlineModeStandby : MdOutlineLens}
          color={state.isChecked ? "#980030" : "#555555"}
          boxSize={"8"}
        />
        <Text
          color={"#111111"}
          textAlign={"center"}
          fontSize={"lg"}
          fontWeight={"normal"}
          ml={2.5}
        >
          {props.children}
        </Text>
      </Flex>
    </Box>
  );
};

export default CustomRadio;
