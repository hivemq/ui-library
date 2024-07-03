import type { Meta, StoryObj } from "@storybook/react";

// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from "@/assets/hivemq-neg.svg?component";

import { Header } from "./Header";
import { HeaderDivider } from "./HeaderDivider";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderMenuButton } from "./HeaderMenuButton";
import { InfoIcon, UserIcon } from "lucide-react";
import { HeaderMenuContent } from "./HeaderMenuContent";
import { Box } from "@chakra-ui/react";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { HeaderMenuDetails } from "./HeaderMenuDetails";
import { HeaderSidebarToggle } from "./HeaderSidebarToggle";
import { Shell } from "../Shell/Shell";
import { NavigationProvider } from "../../context/NavigationContext";
import { Content } from '../Content/Content';
import { Sidebar } from '../Sidebar/Sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Header",
	component: Header,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} satisfies Meta<typeof Header>;

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
						<HeaderDivider />
						<Box alignSelf="end">
							<HeaderMenu overlayId="test">
								<HeaderMenuButton icon={UserIcon} />
								<HeaderMenuContent>
									<HeaderMenuDetails textAlign="center">
										<b>Hello Batman 👋</b>
										<br />
										Welcome back!
									</HeaderMenuDetails>
									<HeaderMenuItem>Account</HeaderMenuItem>
									<HeaderMenuItem>Billing</HeaderMenuItem>
									<HeaderMenuItem>Logout</HeaderMenuItem>
								</HeaderMenuContent>
							</HeaderMenu>
							<HeaderMenu overlayId="other">
								<HeaderMenuButton icon={InfoIcon} />
								<HeaderMenuContent>
									<HeaderMenuDetails>
										Hi, How can we help you? 💁‍♀️
									</HeaderMenuDetails>
									<HeaderMenuItem>Test</HeaderMenuItem>
								</HeaderMenuContent>
							</HeaderMenu>
						</Box>
					</Header>

          <Sidebar>
            <Box>
              Sidebar content can be place here
            </Box>
          </Sidebar>

          <Content>
            Hello World 🌍
          </Content>
				</Shell>
			</NavigationProvider>
		);
	},
};
