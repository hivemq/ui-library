import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { SideNavItemBase } from './HmqUIShell'

import { HmqUIShell } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'HmqUIShell.PageLevelNavigation',
  component: HmqUIShell.PageLevelNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof HmqUIShell.PageLevelNavigation>

export default meta
type Story = StoryObj<typeof meta>

const renderNavLink = (sideNavItem: SideNavItemBase, className: string) => {
  return (
    <a href={sideNavItem.href} className={className}>
      {sideNavItem.name}
    </a>
  )
}

export const Primary: Story = {
  decorators: [
    (Story, context) => {
      Object.assign(context.args)

      const [navigation, setNavigation] = React.useState([
        {
          name: 'Monitor',
          root: '/monitor',
          href: '/monitor/dashboards',
          sideNav: [
            {
              sectionName: 'Monitor',
              items: [
                {
                  name: 'Dashboards',
                  href: '/monitor/dashboards'
                },
                {
                  name: 'Clients',
                  href: '/monitor/clients'
                },
                {
                  name: 'Trace Recordings',
                  href: '/monitor/trace-recordings'
                }
              ]
            },
            {
              sectionName: 'Messages',
              items: [
                {
                  name: 'Retained Messages',
                  href: '/monitor/retained-messages'
                },
                {
                  name: 'Dropped Messages',
                  href: '/monitor/dropped-messages'
                }
              ]
            },
            {
              sectionName: 'Subscriptions',
              items: [
                {
                  name: 'Shared Subscriptions',
                  href: '/monitor/shared-subscriptions'
                },
                {
                  name: 'Extension Consumers',
                  href: '/monitor/extension-consumers'
                },
                {
                  name: 'Installed',
                  href: '',
                  root: '/extensions/installed',
                  forceOpen: false,
                  subItems: [
                    {
                      name: 'Kafka',
                      href: '/extensions/installed/kafka'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ])

      return (
        <Story
          args={{
            ...context.args,
            children: (
              <HmqUIShell.SidebarNavigation
                navigation={navigation}
                renderNavLink={renderNavLink}
                isHrefActive={(href) => href === '/monitor/dashboards'}
                isRootActive={(root) => root === '/monitor'}
              />
            )
          }}
        />
      )
    }
  ]
}
