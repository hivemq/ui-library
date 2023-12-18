import type { Meta, StoryObj } from '@storybook/react'
import classnames from 'classnames'
import * as React from 'react'
import { useState } from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { HmqUIShell } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'HmqUIShell.TopLevelNavigation',
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

      const [navigation, setNavigation] = useState([
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
                <HmqUIShell.SideNavMenuToolbarButton />

                <HmqUIShell.Logo logo={Logo}>Control Center</HmqUIShell.Logo>

                <HmqUIShell.MainNavigation>
                  {navigation.map((item, index) => {
                    return (
                      <HmqUIShell.MainNavItem key={`main_${index}`} isActive={item.active}>
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
                      </HmqUIShell.MainNavItem>
                    )
                  })}
                </HmqUIShell.MainNavigation>
              </React.Fragment>
            )
          }}
        />
      )
    }
  ]
}
