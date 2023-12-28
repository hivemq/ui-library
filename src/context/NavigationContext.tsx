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

export type NavigationProviderValues = {
  navigation: Navigation | undefined
  isHeaderNavigationItemActive: isNavigationItemActive
  isSidebarNavigationItemActive: isNavigationItemActive
  getActiveNavigationItem: () => NavigationItem | undefined
}

export const NavigationContext = React.createContext<NavigationProviderValues>({
  navigation: undefined,
  isHeaderNavigationItemActive: undefined as unknown as isNavigationItemActive,
  isSidebarNavigationItemActive: undefined as unknown as isNavigationItemActive,
  getActiveNavigationItem: () => undefined as unknown as NavigationItem
})

export type NavigationProviderProps = {
  children?: React.ReactNode
  navigation: Navigation
  isHeaderNavigationItemActive: isNavigationItemActive
  isSidebarNavigationItemActive: isNavigationItemActive
}

export function NavigationProvider({
  children,
  navigation,
  isHeaderNavigationItemActive,
  isSidebarNavigationItemActive
}: NavigationProviderProps) {
  const getActiveNavigationItem = React.useMemo(() => {
    return () => navigation.find(isHeaderNavigationItemActive)
  }, [navigation, isHeaderNavigationItemActive])

  return (
    <NavigationContext.Provider
      value={{
        navigation,
        isHeaderNavigationItemActive,
        isSidebarNavigationItemActive,
        getActiveNavigationItem
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
