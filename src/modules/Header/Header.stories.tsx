/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Box } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InfoIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'
// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from '~/assets/hivemq-neg.svg?component'
import { Content } from '../Content'
import { Header, type HeaderColorMode } from '../Header'
import { Shell } from '../Shell'
import { Sidebar } from '../Sidebar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Header',
  component: Header.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header.Root>

export default meta
type Story = StoryObj<typeof meta>

export const WithSidebarNavigationToggle: Story = {
  render() {
    return (
      <Shell.Root>
        <Header.Root>
          <Header.SidebarToggle />
          <Header.Logo src={Logo} alt="HiveMQ Logo" title="Control Center" />
          <Header.Divider />
          <Box alignSelf="end">
            <Header.Menu overlayId="test">
              <Header.MenuButton icon={UserIcon} aria-label="Profile" />
              <Header.MenuContent>
                <Header.MenuContentDetails textAlign="center">
                  <b>Hello Batman 👋</b>
                  <br />
                  Welcome back!
                </Header.MenuContentDetails>
                <Header.MenuContentItem ariaLabel="Account">Account</Header.MenuContentItem>
                <Header.MenuContentItem ariaLabel="Billing">Billing</Header.MenuContentItem>
                <Header.MenuContentItem ariaLabel="Logout">Logout</Header.MenuContentItem>
              </Header.MenuContent>
            </Header.Menu>
            <Header.Menu overlayId="other">
              <Header.MenuButton icon={InfoIcon} aria-label="Support" />
              <Header.MenuContent>
                <Header.MenuContentDetails>Hi, How can we help you? 💁‍♀️</Header.MenuContentDetails>
                <Header.MenuContentItem ariaLabel="Test">Test</Header.MenuContentItem>
              </Header.MenuContent>
            </Header.Menu>
          </Box>
        </Header.Root>

        <Sidebar.Root>
          <Box>Sidebar content can be place here</Box>
        </Sidebar.Root>

        <Content.Root>Hello World 🌍</Content.Root>
      </Shell.Root>
    )
  },
}

function ColorModeMenu() {
  // The application owns the colour mode. Here it is applied the way Chakra expects it:
  // as a `dark` class on the root element. `system` follows the operating system.
  const [colorMode, setColorMode] = useState<HeaderColorMode>('system')

  return (
    <Header.Menu overlayId="settings">
      <Header.MenuButton icon={SettingsIcon} aria-label="Settings" />
      <Header.MenuContent>
        <Header.MenuContentDetails textAlign="center">Settings</Header.MenuContentDetails>
        <Header.MenuContentColorMode
          colorMode={colorMode}
          onColorModeChange={(next) => {
            const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const isDark = next === 'system' ? isOsDark : next === 'dark'
            document.documentElement.classList.toggle('dark', isDark)
            setColorMode(next)
          }}
          lightLabel="Light theme"
          darkLabel="Dark theme"
        >
          Theme
        </Header.MenuContentColorMode>
        <Header.MenuContentItem ariaLabel="Version">Version 1.0.0</Header.MenuContentItem>
      </Header.MenuContent>
    </Header.Menu>
  )
}

export const WithColorModeToggle: Story = {
  render() {
    return (
      <Shell.Root>
        <Header.Root>
          <Header.SidebarToggle />
          <Header.Logo src={Logo} alt="HiveMQ Logo" title="Control Center" />
          <Header.Divider />
          <Box alignSelf="end">
            <ColorModeMenu />
          </Box>
        </Header.Root>

        <Sidebar.Root>
          <Box>Sidebar content can be place here</Box>
        </Sidebar.Root>

        <Content.Root>
          Open the settings menu to pick light or dark. Press the active one again to follow the
          system.
        </Content.Root>
      </Shell.Root>
    )
  },
}
