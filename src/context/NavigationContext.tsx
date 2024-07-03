import * as React from 'react'

export type NavigationProviderProps = {
  children: React.ReactNode
  /**
   * Define whenever the sidebar should be open by default
   */
  isSidebarOpen?: boolean
}

export type NavigationProviderValues = {
  isSidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  openedOverlayId?: string
  setOpenedOverlayId?: (value: string | undefined) => void
}

export const NavigationContext = React.createContext<NavigationProviderValues>({
  isSidebarOpen: false,
  setSidebarOpen: () => void 0,
  openedOverlayId: undefined,
  setOpenedOverlayId: () => void 0
})

export function NavigationProvider({
  children,
  isSidebarOpen: isSidebarOpenDefault = false
}: NavigationProviderProps) {
  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(isSidebarOpenDefault)
  const [openedOverlayId, setOpenedOverlayId] = React.useState<string | undefined>(undefined)

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        openedOverlayId,
        setOpenedOverlayId
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
