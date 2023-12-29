import * as React from 'react'

export type StoryContextValues = {
  currentHref: string
  setCurrentHref: (href: string) => void
}

export const StoryContext = React.createContext<StoryContextValues>({
  currentHref: '',
  setCurrentHref: () => void 0
})

export type StoryContextProviderProps = StoryContextValues & {
  children?: React.ReactNode
}

export function StoryProvider({
  children,
  ...restProps
}: StoryContextProviderProps) {
  return (
    <StoryContext.Provider
      value={restProps}
    >
      {children}
    </StoryContext.Provider>
  )
}
