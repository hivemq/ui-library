/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { HeaderDivider } from './HeaderDivider'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMenu } from './HeaderMenu'
import { HeaderMenuButton } from './HeaderMenuButton'
import { HeaderMenuContent } from './HeaderMenuContent'
import { HeaderMenuContentDetails } from './HeaderMenuContentDetails'
import { HeaderMenuContentItem } from './HeaderMenuContentItem'
import { HeaderNavigationItem } from './HeaderNavigationItem'
import { HeaderRoot } from './HeaderRoot'
import { HeaderSidebarToggle } from './HeaderSidebarToggle'

// ?TODO: Remove deprecated items in the next version

export type { HeaderRootProps } from './HeaderRoot'
export type { HeaderDividerProps } from './HeaderDivider'
export type { HeaderLogoProps } from './HeaderLogo'
export type { HeaderMenuProps } from './HeaderMenu'
export type { HeaderMenuButtonProps } from './HeaderMenuButton'
export type { HeaderMenuContentProps } from './HeaderMenuContent'
export type { HeaderMenuContentDetailsProps } from './HeaderMenuContentDetails'
export type { HeaderMenuContentItemProps } from './HeaderMenuContentItem'
export type { HeaderNavigationItemProps } from './HeaderNavigationItem'
export type { HeaderSidebarToggleProps } from './HeaderSidebarToggle'

export const Header = {
  /**
   * Root element for the header that positions the HTML element on the grid and provides
   * context for all header elements.
   *
   * @requires `Shell.Root` - As the parent element that provides the layout / context for the `Header.Root`
   */
  Root: HeaderRoot,

  /**
   * Show a vertical line between elements in the header
   *
   * @requires `Header.Root` - As the parent element that provides the layout / context for the `Header.Divider`
   */
  Divider: HeaderDivider,

  /**
   * Show a logo in the header
   *
   * @requires `Header.Root` - As the parent element that provides the layout / context for the `Header.Logo`
   */
  Logo: HeaderLogo,

  /**
   * Contextual menu that can be shown in the header to show iterative elements once clicked.
   * Useful for:
   * * Navigation items that are not always needed.
   * * Contextual account menus
   * * Notifications
   * * Support / Help elements
   *
   * @requires `Header.Root` - As the parent element that provides the layout / context for the `Header.Menu`
   */
  Menu: HeaderMenu,

  /**
   * Show an Menu Button that will open or close the menu depending on the state and interaction
   *
   * @requires `Header.Menu` - As the parent element that provides the layout / context for the `Header.MenuButton`
   */
  MenuButton: HeaderMenuButton,

  /**
   * Show the Menu content once the customer has interacted with the Header.MenuButton
   *
   * @requires `Header.Menu` - As the parent element that provides the layout / context for the `Header.MenuContent``
   */
  MenuContent: HeaderMenuContent,

  /**
   * Display details in the Menu Content
   * For example, a greeting or a user name
   *
   * @requires `Header.MenuContent` - As the parent element that provides the layout / context for the `Header.MenuContentDetails`
   */
  MenuContentDetails: HeaderMenuContentDetails,

  /**
   * Render an iterative element within the Header.MenuContent item
   *
   * @requires `Header.MenuContent` - As the parent element that provides the layout / context for the `Header.MenuContentDetails`
   */
  MenuContentItem: HeaderMenuContentItem,

  /**
   * Render a sidebar toggle that handle showing and hiding of the sidebar menu
   *
   * @requires `Header.Root`` - As the parent element that provides the layout / context for the `Header.SidebarToggle`
   */
  SidebarToggle: HeaderSidebarToggle,

  /**
   * Show a simple navigation item in the header.
   * Useful when having multiple navigation on the root level that affect the sidebar content.
   *
   * @requires `Header.Root` - As the parent element that provides the layout / context for the `Header.NavigationItem`
   */
  NavigationItem: HeaderNavigationItem,
}
