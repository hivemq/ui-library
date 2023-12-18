import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { HmqUIShell } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'HmqUIShell.HeaderItems',
  component: HmqUIShell.TopLevelNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof HmqUIShell.TopLevelNavigation>

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
                <HmqUIShell.SideNavMenuToolbarButton />

                <HmqUIShell.Logo logo={Logo}>Control Center</HmqUIShell.Logo>

                <div className="flex items-center">
                  <HmqUIShell.HeaderDropdown
                    className="font-monospace"
                    values={[
                      ['a', 'v1.2'],
                      ['b', 'v1.3']
                    ]}
                    id="version_select_dropdown"
                  />
                  <HmqUIShell.HeaderStatus title="RPM">42.8k</HmqUIShell.HeaderStatus>
                  <HmqUIShell.HeaderStatus title="Status" indicator="success">
                    Running
                  </HmqUIShell.HeaderStatus>
                  <HmqUIShell.HeaderSearch placeholder="Search" />
                </div>
              </React.Fragment>
            )
          }}
        />
      )
    }
  ]
}
