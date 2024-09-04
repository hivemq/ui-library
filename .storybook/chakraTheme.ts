// Theming with Chakra UI is based on the Styled System Theme Specification
// Extend the theme to include custom colors, fonts, etc
import { extendTheme } from "@chakra-ui/react";
import { theme } from "@hivemq/ui-theme";

export const chakraTheme = extendTheme(theme);
