import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    '@storybook/addon-themes',
    "@storybook/addon-docs"
  ],

  // features: {
  //   storyStoreV7: true,
  // },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  }
};
export default config;
