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

export function HmqProvider({ children }: { children: React.ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>
}
HmqProvider.displayName = 'HmqProvider'

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
      <HmqProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </HmqProvider>
    ),
  ]
};

export default preview;
