import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "#FFFFFF",
  },
  track: {
    bg: "#635FC7",
    _checked: {
      bg: "#635FC7",
    },
    _hover: {
      bg: "#A8A4FF",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
