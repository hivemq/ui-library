// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from "@/assets/hivemq-neg.svg?component";

import {
  Box,
  Button,
  Card,
  CardHeader,
  Code,
  HStack,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { InfoIcon, UserIcon } from "lucide-react";
import { useContext, useState } from "react";

import { Header, Sidebar, Content, ShellContext } from "@/lib";

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

const DEMO_HEADER_ITEMS = [
  {
    id: "clusters",
    title: "Clusters",
  },
  {
    id: "api",
    title: "API",
  },
  {
    id: "settings",
    title: "Settings",
  },
];

type SidebarItem = (typeof DEMO_SIDEBAR_ITEMS)[number]["items"][number];
type HeaderItemType = (typeof DEMO_HEADER_ITEMS)[number];

export function FullDemo() {
  const [activeSidebarItem, setActiveSidebarItem] = useState<SidebarItem>(
    DEMO_SIDEBAR_ITEMS[0].items[0],
  );
  const [activeHeaderItem, setActiveHeaderItem] = useState<HeaderItemType>(
    DEMO_HEADER_ITEMS[0],
  );

  const context = useContext(ShellContext);

  return (
    <>
      <Header.Root>
        <Header.SidebarToggle />
        <Header.Logo src={Logo} alt="HiveMQ Logo" title="Control Center" />
        <Header.Divider />
        {DEMO_HEADER_ITEMS.map((item) => (
          <Header.NavigationItem
            key={item.id}
            isActive={activeHeaderItem === item}
            onClick={() => {
              setActiveHeaderItem(item);
            }}
          >
            {item.title}
          </Header.NavigationItem>
        ))}
        <Box flexGrow="2" textAlign="right">
          <Header.Menu overlayId="profile">
            <Header.MenuButton icon={UserIcon} />
            <Header.MenuContent>
              <Header.MenuContentDetails textAlign="center">
                <b>Hello Batman 👋</b>
                <br />
                Welcome back!
              </Header.MenuContentDetails>
              <Header.MenuContentItem>Account</Header.MenuContentItem>
              <Header.MenuContentItem>Billing</Header.MenuContentItem>
              <Header.MenuContentItem>Logout</Header.MenuContentItem>
            </Header.MenuContent>
          </Header.Menu>
          <Header.Menu overlayId="support">
            <Header.MenuButton icon={InfoIcon} />
            <Header.MenuContent>
              <Header.MenuContentDetails>
                Hi, How can we help you? 💁‍♀️
              </Header.MenuContentDetails>
              <Header.MenuContentItem>Test</Header.MenuContentItem>
            </Header.MenuContent>
          </Header.Menu>
        </Box>
      </Header.Root>

      <Sidebar.Root>
        {DEMO_SIDEBAR_ITEMS.map((group) => (
          <Sidebar.Group key={group.title} Title={group.title}>
            <Sidebar.List>
              {group.items.map((item) => (
                <Sidebar.ListItem
                  key={item.id}
                  isActive={activeSidebarItem === item}
                  onClick={() => {
                    setActiveSidebarItem(item);
                  }}
                >
                  {item.title}
                </Sidebar.ListItem>
              ))}
            </Sidebar.List>
          </Sidebar.Group>
        ))}
      </Sidebar.Root>

      <Content.Root display="flex" flexDirection="column" gap={6} w="100%">
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

              <Table layout="fixed">
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

              <Table layout="fixed">
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

            <Card>
              <CardHeader fontWeight={500}>
                Current selected header navigation item
              </CardHeader>

              <Table layout="fixed">
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
                      <Code>{activeHeaderItem.id}</Code>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Code>title</Code>
                    </Td>
                    <Td>
                      <Code>{activeHeaderItem.title}</Code>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Card>
          </HStack>
        </VStack>
      </Content.Root>
    </>
  );
}
