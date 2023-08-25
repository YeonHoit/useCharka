"use client";

import { Box, Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

export default function SelectComponent() {
  return (
    <Box p={6}>
      <Select
        onChange={(e) => {
          const value = e.currentTarget.value;
          console.log(value);
        }}
        size={"lg"}
        variant={"outline"}
        icon={<MdArrowDropDown />}
        bg={"tomato"}
        color={"white"}
      >
        <option
          value="option1"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            border: "1px solid black",
            color: "black",
          }}
        >
          Option 1
        </option>
        <option
          value="option2"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            border: "1px solid black",
            color: "black",
          }}
        >
          Option 2
        </option>
        <option
          value="option3"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            border: "1px solid black",
            color: "black",
          }}
        >
          Option 3
        </option>
      </Select>
    </Box>
  );
}
