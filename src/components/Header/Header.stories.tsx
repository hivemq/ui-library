import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { StoryContext } from '../../../.storybook/StoryContext'

import { Header } from './Header'
import { HeaderDropdown } from './HeaderDropdown'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavigation } from './HeaderNavigation'
import { HeaderSearch } from './HeaderSearch'
import { HeaderSidebarNavigationToggle } from './HeaderSidebarNavigationToggle'
import { HeaderStatus } from './HeaderStatus'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    (Story, context) => {
      Object.assign(context.args, { control: undefined })

      const storyContext = React.useContext(StoryContext)

      return (
        <Story
          args={{
            children: (
              <>
                <HeaderSidebarNavigationToggle />

                <HeaderLogo logo={Logo}>Control Center</HeaderLogo>

                <HeaderNavigation>
                  {({ item }) => (
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault()
                        storyContext.setCurrentHref(item.href)
                      }}
                    >
                      {item.title}
                    </a>
                  )}
                </HeaderNavigation>

                <div className="flex items-center">
                  <HeaderDropdown
                    className="font-monospace"
                    values={[
                      ['a', 'v1.2'],
                      ['b', 'v1.3']
                    ]}
                    id="version_select_dropdown"
                  />
                  <HeaderStatus title="RPM">42.8k</HeaderStatus>
                  <HeaderStatus title="Status" indicatorVariant="success">
                    Running
                  </HeaderStatus>
                  <HeaderSearch placeholder="Search" />
                </div>
              </>
            )
          }}
        />
      )
    }
  ]
}
