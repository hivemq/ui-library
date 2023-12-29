import * as React from 'react'

export type Navigation = NavigationItem[]

export type NavigationItemBase = {
  /**
   * The exact href of the navigation item.
   */
  href: string
  /**
   * The title of the navigation item.
   */
  title: string
}

export type NavigationItem = NavigationItemBase & {
  isFullscreenPage?: boolean
  sidebarNavigation?: {
    sectionName?: string
    items: SidebarNavigationItem[]
  }[]
}

export type SidebarNavigationItem = NavigationItemBase & {
  subItems?: SideNavSubItem[]
  forceOpen?: boolean
}

type SideNavSubItem = NavigationItemBase

export type isNavigationItemActive = (navigationItem: NavigationItemBase) => boolean

export type RenderNavLinkCallback = (sideNavItem: NavigationItemBase, className: string) => React.ReactNode

export type NavigationProviderProps = {
  children?: React.ReactNode
  navigation: Navigation
  isHeaderNavigationItemActive: isNavigationItemActive
  isSidebarNavigationItemActive: isNavigationItemActive
}

export type NavigationProviderValues = Omit<NavigationProviderProps, 'children'> & {
  getActiveNavigationItem: () => NavigationItem | undefined
  isSidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
}

export const NavigationContext = React.createContext<NavigationProviderValues>({
  navigation: undefined as unknown as Navigation,
  isHeaderNavigationItemActive: undefined as unknown as isNavigationItemActive,
  isSidebarNavigationItemActive: undefined as unknown as isNavigationItemActive,
  getActiveNavigationItem: () => undefined as unknown as NavigationItem,
  isSidebarOpen: false,
  setSidebarOpen: () => void 0
})

export function NavigationProvider({
  children,
  navigation,
  isHeaderNavigationItemActive,
  isSidebarNavigationItemActive
}: NavigationProviderProps) {
  const getActiveNavigationItem = React.useMemo(() => {
    return () => navigation.find(isHeaderNavigationItemActive)
  }, [navigation, isHeaderNavigationItemActive])

  const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

  return (
    <NavigationContext.Provider
      value={{
        navigation,
        isHeaderNavigationItemActive,
        isSidebarNavigationItemActive,
        getActiveNavigationItem,
        isSidebarOpen,
        setSidebarOpen
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
