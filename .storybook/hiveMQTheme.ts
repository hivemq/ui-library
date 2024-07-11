import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  brandTitle: "HiveMQ",
  brandUrl: "https://hivemq.com",
  brandImage: "../src/assets/hivemq-logo.svg",
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#000000",
  appContentBg: "#000000",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#ffffff",
  textInverseColor: "#757575",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barBg: "#000000",
  buttonBg: "#ffc000",

  // Form colors
  inputBg: "#212121",
  inputBorder: "#565656",
  inputTextColor: "#ffffff",
  inputBorderRadius: 4,
});
