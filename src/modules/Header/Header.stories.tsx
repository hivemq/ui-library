import type { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from "@/assets/hivemq-neg.svg?component";

import { InfoIcon, UserIcon } from "lucide-react";

import { Box } from "@chakra-ui/react";

import { Shell, Header, Sidebar, Content } from "@/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Header",
	component: Header.Container,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Header.Container>;

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
						<Header.Divider />
						<Box alignSelf="end">
							<Header.Menu overlayId="test">
								<Header.MenuButton icon={UserIcon} />
								<Header.MenuContent>
									<Header.MenuDetails textAlign="center">
										<b>Hello Batman 👋</b>
										<br />
										Welcome back!
									</Header.MenuDetails>
									<Header.MenuItem>Account</Header.MenuItem>
									<Header.MenuItem>Billing</Header.MenuItem>
									<Header.MenuItem>Logout</Header.MenuItem>
								</Header.MenuContent>
							</Header.Menu>
							<Header.Menu overlayId="other">
								<Header.MenuButton icon={InfoIcon} />
								<Header.MenuContent>
									<Header.MenuDetails>
										Hi, How can we help you? 💁‍♀️
									</Header.MenuDetails>
									<Header.MenuItem>Test</Header.MenuItem>
								</Header.MenuContent>
							</Header.Menu>
						</Box>
					</Header.Container>

					<Sidebar.Container>
						<Box>Sidebar content can be place here</Box>
					</Sidebar.Container>

					<Content.Base>Hello World 🌍</Content.Base>
				</Shell.Container>
			</Shell.Provider>
		);
	},
};
