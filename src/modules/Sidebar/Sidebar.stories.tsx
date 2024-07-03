import type { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from "@/assets/hivemq-neg.svg?component";

import { Header, Content, Sidebar, Shell } from "@/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Sidebar",
	component: Sidebar.Container,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Sidebar.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSidebarNavigationToggle: Story = {
	render() {
		return (
			<Shell.Provider>
				<Shell.Container>
					<Header.Container>
						<Header.SidebarToggle />
						<Header.Logo src={Logo} alt="HiveMQ Logo" title="Control Center" />
					</Header.Container>
					<Sidebar.Container>
						<Sidebar.List>
							<Sidebar.ListItem isActive>Menu item 1</Sidebar.ListItem>
							<Sidebar.ListItem>Menu item 2</Sidebar.ListItem>
							<Sidebar.ListItem>Menu item 3</Sidebar.ListItem>
						</Sidebar.List>
					</Sidebar.Container>

					<Content.Container>Hello</Content.Container>
				</Shell.Container>
			</Shell.Provider>
		);
	},
};
