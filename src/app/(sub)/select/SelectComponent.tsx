"use client";

import { Box, Select } from "@chakra-ui/react";

export default function SelectComponent() {
  return (
    <Box p={6}>
      <Select
        placeholder="Select Option"
        onChange={(e) => {
          const value = e.currentTarget.value;
          console.log(value);
        }}
        size={"lg"}
        variant={"filled"}
      >
        <option
          value="option1"
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            border: "1px solid black",
          }}
        >
          Option 1
        </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  );
}
