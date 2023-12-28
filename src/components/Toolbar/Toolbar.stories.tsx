import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { ToolbarDropdown } from './ToolbarDropdown'
import { ToolbarLogo } from './ToolbarLogo'
import { ToolbarSearch } from './ToolbarSearch'
import { ToolbarSidebarNavigationToggle } from './ToolbarSidebarNavigationToggle'
import { ToolbarStatus } from './ToolbarStatus'
import { TopLevelNavigation } from './TopLevelNavigation'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Toolbar',
  component: TopLevelNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof TopLevelNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    (Story, context) => {
      Object.assign(context.args, { control: undefined })

      return (
        <Story
          args={{
            children: (
              <React.Fragment>
                <ToolbarSidebarNavigationToggle />

                <ToolbarLogo logo={Logo}>Control Center</ToolbarLogo>

                <div className="flex items-center">
                  <ToolbarDropdown
                    className="font-monospace"
                    values={[
                      ['a', 'v1.2'],
                      ['b', 'v1.3']
                    ]}
                    id="version_select_dropdown"
                  />
                  <ToolbarStatus title="RPM">42.8k</ToolbarStatus>
                  <ToolbarStatus title="Status" indicatorVariant="success">
                    Running
                  </ToolbarStatus>
                  <ToolbarSearch placeholder="Search" />
                </div>
              </React.Fragment>
            )
          }}
        />
      )
    }
  ]
}
