import type { Meta, StoryObj } from '@storybook/react'
import classnames from 'classnames'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

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

      const [navigation, setNavigation] = React.useState([
        {
          name: 'Link 1',
          root: '/monitor',
          href: '/monitor/dashboards',
          active: true
        },
        {
          name: 'Link 2',
          root: '/monitor',
          href: '/monitor/dashboards',
          active: false
        }
      ])

      function handleClick(itemName: string) {
        setNavigation((navigation) => {
          return navigation.map((item) => {
            return {
              ...item,
              active: item.name === itemName
            }
          })
        })
      }

      return (
        <Story
          args={{
            children: (
              <React.Fragment>
                <HeaderSidebarNavigationToggle />

                <HeaderLogo logo={Logo}>Control Center</HeaderLogo>

                <HeaderNavigation>
                  {navigation.map((item, index) => {
                    return (
                      <HeaderNavigationItem key={`main_${index}`} isActive={item.active}>
                        <a
                          href="#"
                          className={classnames('group-hover/item:text-white py-4 transition-[color]', {
                            'text-white/75': !item.active,
                            'text-white': item.active
                          })}
                          onClick={(event) => {
                            event.preventDefault()
                            handleClick(item.name)
                          }}
                        >
                          {item.name}
                        </a>
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
              </React.Fragment>
            )
          }}
        />
      )
    }
  ]
}
