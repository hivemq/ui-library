import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { StoryContext } from '../../.storybook/StoryContext'
import { Content } from '../components/Content/Content'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeaderDropdown } from '../components/Header/HeaderDropdown'
import { HeaderLogo } from '../components/Header/HeaderLogo'
import { HeaderNavigation } from '../components/Header/HeaderNavigation'
import { HeaderSearch } from '../components/Header/HeaderSearch'
import { HeaderSidebarNavigationToggle } from '../components/Header/HeaderSidebarNavigationToggle'
import { HeaderStatus } from '../components/Header/HeaderStatus'
import { Sidebar, SidebarNavigation } from '../components/Sidebar/SidebarNavigation'

import { SimpleImplementation } from './cookbook/SimpleImpementation'

function Empty({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Demo',
  component: Empty,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: 'Full Interactive',
  decorators: [
    (Story, context) => {
      Object.assign(context.args, { control: undefined })

      const storyContext = React.useContext(StoryContext)

      return (
        <Story
          args={{
            children: (
              <Grid>
                <Header>
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
                </Header>
                <Sidebar>
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
                </Sidebar>

                <Content>
                  <div className="p-16">
                    <div className="bg-white p-4 rounded border">
                      Hello 👋
                      <br />
                      virtual route <span className="bg-slate-100 font-monospace py-1 px-2 text-xs">{storyContext.currentHref}</span>
                    </div>
                  </div>
                </Content>
              </Grid>
            )
          }}
        />
      )
    }
  ]
}

export const Cookbook01: Story = {
  name: 'Cookbook/01',
  render: SimpleImplementation
}
