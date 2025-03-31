// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from '~/assets/hivemq-neg.svg?component'

import {
  Box,
  Button,
  Card,
  CardHeader,
  Code,
  HStack,
  Heading,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react'
import { InfoIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
import { useShellContext } from '~/context/ShellContext'
import { Content } from '~/modules/Content'
import { Header } from '~/modules/Header'
import { Sidebar } from '~/modules/Sidebar'

const DEMO_SIDEBAR_ITEMS = [
  {
    title: 'Cluster',
    items: [
      {
        title: 'Overview',
        id: 'cluster-overview',
      },
      {
        title: 'Nodes',
        id: 'cluster-nodes',
      },
      {
        title: 'Clients',
        id: 'cluster-clients',
      },
    ],
  },
  {
    title: 'API',
    items: [
      {
        title: 'Overview',
        id: 'api-overview',
      },
      {
        title: 'Clients',
        id: 'api-clients',
      },
      {
        title: 'Metrics',
        id: 'api-metrics',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        title: 'Overview',
        id: 'settings-overview',
      },
      {
        title: 'Users',
        id: 'settings-users',
      },
      {
        title: 'Roles',
        id: 'settings-roles',
      },
    ],
  },
] as const

const DEMO_HEADER_ITEMS = [
  {
    id: 'clusters',
    title: 'Clusters',
  },
  {
    id: 'api',
    title: 'API',
  },
  {
    id: 'settings',
    title: 'Settings',
  },
]

type SidebarItem = (typeof DEMO_SIDEBAR_ITEMS)[number]['items'][number]
type HeaderItemType = (typeof DEMO_HEADER_ITEMS)[number]

export function FullDemo() {
  const [activeSidebarItem, setActiveSidebarItem] = useState<SidebarItem>(
    DEMO_SIDEBAR_ITEMS[0].items[0],
  )
  const [activeHeaderItem, setActiveHeaderItem] = useState<HeaderItemType>(DEMO_HEADER_ITEMS[0])

  const context = useShellContext()

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
              setActiveHeaderItem(item)
            }}
          >
            {item.title}
          </Header.NavigationItem>
        ))}
        <Box flexGrow="2" textAlign="right">
          <Header.Menu overlayId="profile">
            <Header.MenuButton icon={UserIcon} aria-label="Profile" />
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
            <Header.MenuButton icon={InfoIcon} aria-label="Support" />
            <Header.MenuContent>
              <Header.MenuContentDetails>Hi, How can we help you? 💁‍♀️</Header.MenuContentDetails>
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
                    setActiveSidebarItem(item)
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
          <Heading as="h1" fontSize="2xl">
            Hello World 🌍
          </Heading>

          <Text>
            This is a full demo of the HiveMQ UI Library. You can interact with the sidebar to
            change the active item.
          </Text>
        </VStack>

        <VStack gap={4} alignItems="start">
          <Heading as="h2" fontSize="1xl">
            Internal State
          </Heading>

          <HStack alignItems="start">
            <Card.Root>
              <CardHeader fontWeight={500}>
                Internals of <Code>NavigationProvider</Code>
              </CardHeader>

              <Table.Root tableLayout="fixed">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Property</Table.ColumnHeader>
                    <Table.ColumnHeader>Description</Table.ColumnHeader>
                    <Table.ColumnHeader>Value</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>isSidebarOpen</Code>
                    </Table.Cell>
                    <Table.Cell>Is the sidebar open?</Table.Cell>
                    <Table.Cell>
                      <Code>{context.isSidebarOpen ? 'true' : 'false'}</Code>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>setSidebarOpen</Code>
                    </Table.Cell>
                    <Table.Cell>Function set the opened state of the sidebar</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={(event) => {
                          event.preventDefault()
                          context.setSidebarOpen(!context.isSidebarOpen)
                        }}
                      >
                        Toggle Sidebar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>setOpenedOverlayId</Code>
                    </Table.Cell>
                    <Table.Cell>Function to set the opened overlay ID</Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={(event) => {
                          event.preventDefault()
                          context.setOpenedOverlayId?.('profile')
                        }}
                      >
                        Open profile
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card.Root>

            <Card.Root>
              <CardHeader fontWeight={500}>Current selected sidebar item</CardHeader>

              <Table.Root tableLayout="fixed">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Property</Table.ColumnHeader>
                    <Table.ColumnHeader>Value</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>id</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Code>{activeSidebarItem.id}</Code>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>title</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Code>{activeSidebarItem.title}</Code>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card.Root>

            <Card.Root>
              <CardHeader fontWeight={500}>Current selected header navigation item</CardHeader>

              <Table.Root tableLayout="fixed">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Property</Table.ColumnHeader>
                    <Table.ColumnHeader>Value</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Code>id</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Code>{activeHeaderItem.id}</Code>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Code>title</Code>
                    </Table.Cell>
                    <Table.Cell>
                      <Code>{activeHeaderItem.title}</Code>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card.Root>
          </HStack>
        </VStack>
      </Content.Root>
    </>
  )
}
