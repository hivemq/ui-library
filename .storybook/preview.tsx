import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import './styles.css'
import type { PropsWithChildren } from 'react'
import { system as theme } from './theme'

function StoryWrapper({ children }: PropsWithChildren) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
  ],
}

export default preview
