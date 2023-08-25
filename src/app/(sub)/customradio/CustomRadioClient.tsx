"use client";

import { Flex, useRadioGroup } from "@chakra-ui/react";
import CustomRadio from "./CustomRadio";

export default function CustomRadioClient() {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex direction={"row"} gap={3} py={5} px={3} {...group}>
      {options.map((value: string) => {
        const radio = getRadioProps({ value });
        return (
          <CustomRadio key={value} {...radio}>
            {value}
          </CustomRadio>
        );
      })}
    </Flex>
  );
}
