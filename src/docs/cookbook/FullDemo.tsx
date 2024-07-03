import Logo from "@/assets/hivemq-neg.svg?component";

import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Code,
	HStack,
	Heading,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Text,
	VStack,
	Button,
	CardFooter,
} from "@chakra-ui/react";
import { InfoIcon, UserIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Content } from "../../components/Content/Content";
import { Header } from "../../components/Header/Header";
import { HeaderDivider } from "../../components/Header/HeaderDivider";
import { HeaderLogo } from "../../components/Header/HeaderLogo";
import { HeaderMenu } from "../../components/Header/HeaderMenu";
import { HeaderMenuButton } from "../../components/Header/HeaderMenuButton";
import { HeaderMenuContent } from "../../components/Header/HeaderMenuContent";
import { HeaderMenuDetails } from "../../components/Header/HeaderMenuDetails";
import { HeaderMenuItem } from "../../components/Header/HeaderMenuItem";
import { HeaderSidebarToggle } from "../../components/Header/HeaderSidebarToggle";
import { Shell } from "../../components/Shell/Shell";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { SidebarList } from "../../components/Sidebar/SidebarList";
import { SidebarListItem } from "../../components/Sidebar/SidebarListItem";
import { SidebarGroup } from "../../components/Sidebar/SidebarGroup";
import { NavigationContext } from "../../context/NavigationContext";

const DEMO_SIDEBAR_ITEMS = [
	{
		title: "Cluster",
		items: [
			{
				title: "Overview",
				id: "cluster-overview",
			},
			{
				title: "Nodes",
				id: "cluster-nodes",
			},
			{
				title: "Clients",
				id: "cluster-clients",
			},
		],
	},
	{
		title: "API",
		items: [
			{
				title: "Overview",
				id: "api-overview",
			},
			{
				title: "Clients",
				id: "api-clients",
			},
			{
				title: "Metrics",
				id: "api-metrics",
			},
		],
	},
	{
		title: "Settings",
		items: [
			{
				title: "Overview",
				id: "settings-overview",
			},
			{
				title: "Users",
				id: "settings-users",
			},
			{
				title: "Roles",
				id: "settings-roles",
			},
		],
	},
] as const;

type SidebarItem = (typeof DEMO_SIDEBAR_ITEMS)[number]["items"][number];

export function FullDemo() {
	const [activeSidebarItem, setActiveSidebarItem] = useState<SidebarItem>(
		DEMO_SIDEBAR_ITEMS[0].items[0],
	);

	const context = useContext(NavigationContext);

	return (
		<Shell>
			<Header>
				<HeaderSidebarToggle />
				<HeaderLogo src={Logo} alt="HiveMQ Logo" title="Control Center" />
				<HeaderDivider />
				<Box flexGrow="2" textAlign="right">
					<HeaderMenu overlayId="profile">
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
					<HeaderMenu overlayId="support">
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
				{DEMO_SIDEBAR_ITEMS.map((group) => (
					<SidebarGroup key={group.title} Title={group.title}>
						<SidebarList>
							{group.items.map((item) => (
								<SidebarListItem
									key={item.id}
									isActive={activeSidebarItem === item}
									onClick={() => {
										setActiveSidebarItem(item);
									}}
								>
									{item.title}
								</SidebarListItem>
							))}
						</SidebarList>
					</SidebarGroup>
				))}
			</Sidebar>

			<Content display="flex" flexDirection="column" gap={6} w="100%">
				<VStack gap={4} alignItems="start">
					<Heading as="h1" variant="h1">
						Hello World 🌍
					</Heading>

					<Text>
						This is a full demo of the HiveMQ UI Shell. You can interact with
						the sidebar to change the active item.
					</Text>
				</VStack>

				<VStack gap={4} alignItems="start">
					<Heading as="h2" variant="h2">
						Internal State
					</Heading>

					<HStack alignItems="start">
						<Card>
							<CardHeader fontWeight={500}>
								Internals of <Code>NavigationProvider</Code>
							</CardHeader>

							<Table>
								<Thead>
									<Tr>
										<Th>Property</Th>
										<Th>Description</Th>
										<Th>Value</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>
											<Code>isSidebarOpen</Code>
										</Td>
										<Td>Is the sidebar open?</Td>
										<Td>
											<Code>{context.isSidebarOpen ? "true" : "false"}</Code>
										</Td>
									</Tr>
									<Tr>
										<Td>
											<Code>openedOverlayId</Code>
										</Td>
										<Td>Currently opened overlay ID</Td>
										<Td>
											<Code>{context.openedOverlayId ?? "undefined"}</Code>
										</Td>
									</Tr>
									<Tr>
										<Td>
											<Code>setSidebarOpen</Code>
										</Td>
										<Td>Function set the opened state of the sidebar</Td>
										<Td>
											<Button
												variant="secondary"
												onClick={(event) => {
													event.preventDefault();
													context.setSidebarOpen(!context.isSidebarOpen);
												}}
											>
												Toggle Sidebar
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>
											<Code>setOpenedOverlayId</Code>
										</Td>
										<Td>Function to set the opened overlay ID</Td>
										<Td>
											<Button
												variant="secondary"
												onClick={(event) => {
													event.preventDefault();
													context.setOpenedOverlayId?.("profile");
												}}
											>
												Open profile
											</Button>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</Card>

						<Card>
							<CardHeader fontWeight={500}>
								Current selected sidebar item
							</CardHeader>

							<Table>
								<Thead>
									<Tr>
										<Th>Property</Th>
										<Th>Value</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>
											<Code>id</Code>
										</Td>
										<Td>
											<Code>{activeSidebarItem.id}</Code>
										</Td>
									</Tr>
									<Tr>
										<Td>
											<Code>title</Code>
										</Td>
										<Td>
											<Code>{activeSidebarItem.title}</Code>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</Card>
					</HStack>
				</VStack>
			</Content>
		</Shell>
	);
}
