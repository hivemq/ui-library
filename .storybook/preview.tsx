import * as React from 'react'
import type { Preview } from "@storybook/react";

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto/900-italic.css'
import '@/static/styles.css'

import { Navigation, NavigationItemBase, NavigationProvider } from '../src/context/NavigationContext'
import { StoryProvider } from './StoryContext';

function StoryWrapper({ children }: { children: React.ReactNode }) {
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
    <NavigationProvider navigation={navigation} isHeaderNavigationItemActive={isHeaderNavigationItemActive} isSidebarNavigationItemActive={isSidebarNavigationItemActive}>
      <StoryProvider setCurrentHref={setCurrentHref}>
        {children}
      </StoryProvider>
    </NavigationProvider>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </StoryWrapper>
    ),
  ]
};

export default preview;
