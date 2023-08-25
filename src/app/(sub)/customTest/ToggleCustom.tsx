"use client";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Switch,
  createMultiStyleConfigHelpers,
  extendTheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";

export default function ToggleCustom() {
  const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(switchAnatomy.keys);

  const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
      // ...
    },
    thumb: {
      bg: "purple",
    },
    track: {
      bg: "gray.900",
      _checked: {
        bg: "gray.100",
      },
    },
  });
  const switchTheme = defineMultiStyleConfig({ baseStyle });

  const customTheme = extendTheme({
    components: {
      Switch: switchTheme,
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
      </FormControl>
      <Switch />
    </ChakraProvider>
  );
}
