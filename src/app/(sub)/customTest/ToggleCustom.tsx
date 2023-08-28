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
import { switchAnatomy, buttonAnatomy } from "@chakra-ui/anatomy";

interface IProps {
  importAnatomy: string;
  changeStyleProperty: any;
  changeComponentName: string;
}
export default function ToggleCustom() {
  const ThemeSelectComponent = (
    importAnatomy: any,
    changeStyleProperty: any,
    changeComponentName: any
  ) => {
    const { definePartsStyle, defineMultiStyleConfig } =
      createMultiStyleConfigHelpers(
        importAnatomy === "switchAnatomy"
          ? switchAnatomy.keys
          : buttonAnatomy.keys
      );

    const baseStyle = definePartsStyle(changeStyleProperty);
    const switchTheme = defineMultiStyleConfig({ baseStyle });

    const customTheme = extendTheme({
      components: {
        changeComponentName: switchTheme,
      },
    });

    return customTheme;
  };

  const property = {
    // define the part you're going to style
    thumb: {
      bg: "purple",
    },
    track: {
      bg: "gray.900",
      _checked: {
        bg: "gray.100",
        border: "2px",
        borderColor: "blue",
        bgGradient: "linear(to-r, green.200, pink.500)",
      },
    },
  };
  return (
    <>
      {/* Switch 커스텀 이전 */}
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          변경 이전
        </FormLabel>
        <Switch />
      </FormControl>
      {/* Switch 커스텀 이후 */}
      <ChakraProvider
        theme={ThemeSelectComponent("switchAnatomy", property, "Switch")}
      >
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            변경 이후
          </FormLabel>
          <Switch />
        </FormControl>
      </ChakraProvider>
    </>
  );
}
