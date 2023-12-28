import type { Meta, StoryObj } from '@storybook/react'
import classnames from 'classnames'
import * as React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

import { Content } from '../components/Content/Content'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeaderDropdown } from '../components/Header/HeaderDropdown'
import { HeaderLogo } from '../components/Header/HeaderLogo'
import { HeaderNavigation, HeaderNavigationItem } from '../components/Header/HeaderNavigation'
import { HeaderSearch } from '../components/Header/HeaderSearch'
import { HeaderSidebarNavigationToggle } from '../components/Header/HeaderSidebarNavigationToggle'
import { HeaderStatus } from '../components/Header/HeaderStatus'
import { Sidebar, SidebarNavigation } from '../components/Sidebar/SidebarNavigation'
import { Navigation, NavigationItemBase, NavigationProvider } from '../context/NavigationContext'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Full Demo',
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
          href: '/dashboards',
          title: 'Dashboard',
          sidebarNavigation: [
            {
              sectionName: 'Monitor',
              items: [
                {
                  href: '/dashboards',
                  title: 'Overview'
                },
                {
                  href: '/dashboards/clustering',
                  title: 'Clustering'
                },
                {
                  href: '/dashboards/policies',
                  title: 'Policies'
                }
              ]
            }
          ]
        },
        {
          href: '/clients',
          title: 'Clients',
          sidebarNavigation: [
            {
              sectionName: 'Management',
              items: [
                {
                  href: '/clients',
                  title: 'Overview'
                },
                {
                  href: '/clients/sessions',
                  title: 'Sessions'
                },
                {
                  href: '/clients/retained-messages',
                  title: 'Retained Messages'
                },
                {
                  href: '/clients/subscriptions',
                  title: 'Subscriptions'
                }
              ]
            },
            {
              sectionName: 'Tracing',
              items: [
                {
                  href: '/clients/trace-recordings',
                  title: 'Trace Recordings'
                },
                {
                  href: '/clients/trace-messages',
                  title: 'Trace Messages'
                },
                {
                  href: '/clients/trace-connections',
                  title: 'Trace Connections'
                }
              ]
            }
          ]
        },
        {
          href: '/data-hub',
          title: 'Data Hub'
        }
      ] as const

      const [currentHref, setCurrentHref] = React.useState<(typeof navigation)[number]['href']>(navigation[0].href)

      function isHeaderNavigationItemActive(navigationItem: NavigationItemBase) {
        return navigationItem.href === '/' + currentHref.split('/')[1]
      }

      function isSidebarNavigationItemActive(navigationItem: NavigationItemBase) {
        return navigationItem.href === currentHref
      }

      return (
        <Story
          args={{
            navigation,
            isHeaderNavigationItemActive,
            isSidebarNavigationItemActive,
            children: (
              <Grid>
                <Header>
                  <HeaderSidebarNavigationToggle />

                  <HeaderLogo logo={Logo}>Control Center</HeaderLogo>

                  <HeaderNavigation>
                    {navigation.map((item, index) => {
                      return (
                        <HeaderNavigationItem key={`main_${index}`} item={item}>
                          <a
                            href="#"
                            onClick={(event) => {
                              event.preventDefault()
                              setCurrentHref(item.href)
                            }}
                          >
                            {item.title}
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
                </Header>
                <Sidebar isOpenMenu={true}>
                  <SidebarNavigation>
                    {({ item }) => (
                      <a
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault()
                          setCurrentHref(item.href)
                        }}
                      >
                        {item.title}
                      </a>
                    )}
                  </SidebarNavigation>
                </Sidebar>

                <Content>
                  <div>Hello</div>
                </Content>
              </Grid>
            )
          }}
        />
      )
    }
  ]
}
