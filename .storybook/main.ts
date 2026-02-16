import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    '@storybook/addon-themes',
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
      optimizeDeps: {
        include: ['@chakra-ui/react', '@emotion/react', 'react', 'react-dom'],
      },
    });
  },
};
export default config;
