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

import type { Meta, StoryObj } from '@storybook/react-vite'

// @ts-expect-error - Typescript doesn't how to import svgs yet
import Logo from '~/assets/hivemq-neg.svg?component'

import { Content } from '../Content'
import { Header } from '../Header'
import { Shell } from '../Shell'
import { Sidebar } from '../Sidebar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Sidebar',
  component: Sidebar.Root,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Sidebar.Root>

export default meta
type Story = StoryObj<typeof meta>

export const WithSidebarNavigationToggle: Story = {
  render() {
    return (
      <Shell.Root>
        <Header.Root>
          <Header.SidebarToggle />
          <Header.Logo src={Logo} alt="HiveMQ Logo" title="Control Center" />
        </Header.Root>

        <Sidebar.Root>
          <Sidebar.List>
            <Sidebar.ListItem isActive>Menu item 1</Sidebar.ListItem>
            <Sidebar.ListItem>Menu item 2</Sidebar.ListItem>
            <Sidebar.ListItem>Menu item 3</Sidebar.ListItem>
          </Sidebar.List>
        </Sidebar.Root>

        <Content.Root>Hello</Content.Root>
      </Shell.Root>
    )
  },
}
