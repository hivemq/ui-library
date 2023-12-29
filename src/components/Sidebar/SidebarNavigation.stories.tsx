import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { StoryContext } from '../../../.storybook/StoryContext'

import { SidebarNavigation, Sidebar } from './SidebarNavigation'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'SidebarNavigation',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpenMenu: true
  },
  decorators: [
    (Story, context) => {
      Object.assign(context.args)

      const storyContext = React.useContext(StoryContext)

      return (
        <Story
          args={{
            ...context.args,
            children: (
              <SidebarNavigation>
                {({ item }) => (
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault()
                      storyContext.setCurrentHref(item.href)
                    }}
                  >
                    {item.title}
                  </a>
                )}
              </SidebarNavigation>
            )
          }}
        />
      )
    }
  ]
}
