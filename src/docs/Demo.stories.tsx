import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import Logo from "@/assets/hivemq-neg.svg?component";

import { StoryContext } from "../../.storybook/StoryContext";

import { SimpleImplementation } from "./cookbook/SimpleImplementation";
import { NavigationProvider } from "../context/NavigationContext";
import { Shell } from "../components/Shell/Shell";
import { Header } from "../components/Header/Header";
import { HeaderLogo } from "../components/Header/HeaderLogo";
import { HeaderSidebarToggle } from "../components/Header/HeaderSidebarToggle";
import { HeaderDivider } from "../components/Header/HeaderDivider";
import { Box } from "@chakra-ui/react";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { HeaderMenuButton } from "../components/Header/HeaderMenuButton";
import { HeaderMenuContent } from "../components/Header/HeaderMenuContent";
import { HeaderMenuDetails } from "../components/Header/HeaderMenuDetails";
import { HeaderMenuItem } from "../components/Header/HeaderMenuItem";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Content } from "../components/Content/Content";
import { InfoIcon, UserIcon } from "lucide-react";
import { SidebarList } from "../components/Sidebar/SidebarList";
import { SidebarListItem } from "../components/Sidebar/SidebarListItem";
import { FullDemo } from './cookbook/FullDemo';

function Empty({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Demo",
	component: Empty,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	name: "Full Interactive",
	decorators: [
		(Story, context) => {
			Object.assign(context.args, { control: undefined });

			return (
				<Story
					args={{
						children: (
							<NavigationProvider>
                <FullDemo />
							</NavigationProvider>
						),
					}}
				/>
			);
		},
	],
};

export const Cookbook01: Story = {
	name: "Cookbook/01",
	render: SimpleImplementation,
};
