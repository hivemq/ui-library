import * as React from 'react'

export type StoryContextValues = {
  setCurrentHref: (href: string) => void
}

export const StoryContext = React.createContext<StoryContextValues>({
  setCurrentHref: () => void 0
})

export type StoryContextProviderProps = StoryContextValues & {
  children?: React.ReactNode
}

export function StoryProvider({
  children,
  setCurrentHref
}: StoryContextProviderProps) {
  return (
    <StoryContext.Provider
      value={{
        setCurrentHref
      }}
    >
      {children}
    </StoryContext.Provider>
  )
}
