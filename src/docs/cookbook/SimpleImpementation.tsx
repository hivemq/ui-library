import { UIShell } from '@hivemq/ui-shell'
import React from 'react'

import Logo from '@/assets/hivemq-neg.svg?component'

export function SimpleImplementation() {
  const navigation = [
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
    }
  ]

  const [currentHref, setCurrentHref] = React.useState<(typeof navigation)[number]['href']>(navigation[0].href)

  return (
    <UIShell.Provider
      navigation={navigation}
      isHeaderNavigationItemActive={(navigationItem) => navigationItem.href === '/' + currentHref.split('/')[1]}
      isSidebarNavigationItemActive={(navigationItem) => navigationItem.href === currentHref}
    >
      <UIShell.Grid>
        <UIShell.Header>
          <UIShell.HeaderLogo logo={Logo}>Control Center</UIShell.HeaderLogo>
          <UIShell.HeaderNavigation>
            {({ item }) => (
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setCurrentHref(item.href)
                }}
              >
                {item.title}
              </a>
            )}
          </UIShell.HeaderNavigation>
        </UIShell.Header>
        <UIShell.Sidebar>
          <UIShell.SidebarNavigation>
            {({ item }) => (
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  setCurrentHref(item.href)
                }}
              >
                {item.title}
              </a>
            )}
          </UIShell.SidebarNavigation>
        </UIShell.Sidebar>
        <UIShell.Content>Hello 👋 from {currentHref}</UIShell.Content>
      </UIShell.Grid>
    </UIShell.Provider>
  )
}
