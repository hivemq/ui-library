import * as React from "react";
import type { Preview } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/900-italic.css";
import "./styles.css";

import { chakraTheme } from "./chakraTheme";

function StoryWrapper({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>;
}

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<StoryWrapper>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</StoryWrapper>
		),
	],
};

export default preview;
