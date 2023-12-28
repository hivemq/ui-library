import type { Meta, StoryObj } from '@storybook/react'
import classnames from 'classnames'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { Navigation, NavigationItemBase, NavigationProvider } from '../../context/NavigationContext'

import { Header } from './Header'
import { HeaderDropdown } from './HeaderDropdown'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavigation, HeaderNavigationItem } from './HeaderNavigation'
import { HeaderSearch } from './HeaderSearch'
import { HeaderSidebarNavigationToggle } from './HeaderSidebarNavigationToggle'
import { HeaderStatus } from './HeaderStatus'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Header',
  component: NavigationProvider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof NavigationProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    (Story, context) => {
      Object.assign(context.args, { control: undefined })

      const navigation: Navigation = [
        {
          href: '/monitor/dashboards',
          rootHref: '/monitor',
          title: 'Dashboard'
        },
        {
          href: '/monitor/clients',
          rootHref: '/monitor',
          title: 'Clients'
        },
        {
          href: '/monitor/trace-recordings',
          rootHref: '/monitor',
          title: 'Trace Recordings'
        }
      ] as const

      const [currentHref, setCurrentHref] = React.useState<(typeof navigation)[number]['href']>(navigation[0].href)

      function isNavigationItemActive(navigationItem: NavigationItemBase) {
        return navigationItem.href === currentHref
      }

      return (
        <Story
          args={{
            navigation,
            isNavigationItemActive,
            children: (
              <Header>
                <HeaderSidebarNavigationToggle />

                <HeaderLogo logo={Logo}>Control Center</HeaderLogo>

                <HeaderNavigation>
                  {navigation.map((item, index) => {
                    return (
                      <HeaderNavigationItem key={`main_${index}`} item={item}>
                        {({ isActive }) => {
                          return (
                            <a
                              href="#"
                              className={classnames('group-hover/item:text-white py-4 transition-[color]', {
                                'text-white/75': !isActive,
                                'text-white': isActive
                              })}
                              onClick={(event) => {
                                event.preventDefault()
                                setCurrentHref(item.href)
                              }}
                            >
                              {item.title}
                            </a>
                          )
                        }}
                      </HeaderNavigationItem>
                    )
                  })}
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
              </Header>
            )
          }}
        />
      )
    }
  ]
}
