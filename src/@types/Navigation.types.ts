import * as React from 'react'

export type RenderNavLinkCallback = (sideNavItem: SideNavItemBase, className: string) => React.ReactNode

export type SideNavItemBase = {
  name: string
  href: string
}
type SideNavSubItem = SideNavItemBase
export type SideNavItem = SideNavItemBase & {
  subItems?: SideNavSubItem[]
  root?: string
  forceOpen?: boolean
}
type NavigationItem = SideNavItemBase & {
  root: string
  sideNav?: {
    sectionName?: string
    items: SideNavItem[]
  }[]
}

export type MainNavigation = NavigationItem[]
