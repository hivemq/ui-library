import type { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from "@/assets/hivemq-neg.svg?component";

import { Shell } from "../Shell/Shell";
import { Sidebar } from "./Sidebar";
import { Header } from "../Header/Header";
import { HeaderSidebarToggle } from "../Header/HeaderSidebarToggle";
import { HeaderLogo } from "../Header/HeaderLogo";
import { SidebarListItem } from "./SidebarListItem";
import { SidebarList } from "./SidebarList";
import { Content } from "../Content/Content";
import { NavigationProvider } from "../../context/NavigationContext";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Sidebar",
	component: Sidebar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSidebarNavigationToggle: Story = {
	render() {
		return (
			<NavigationProvider>
				<Shell>
					<Header>
						<HeaderSidebarToggle />
						<HeaderLogo src={Logo} alt="HiveMQ Logo" title="Control Center" />
					</Header>
					<Sidebar>
						<SidebarList>
							<SidebarListItem isActive>Menu item 1</SidebarListItem>
							<SidebarListItem>Menu item 2</SidebarListItem>
							<SidebarListItem>Menu item 3</SidebarListItem>
						</SidebarList>
					</Sidebar>

					<Content>Hello</Content>
				</Shell>
			</NavigationProvider>
		);
	},
};
