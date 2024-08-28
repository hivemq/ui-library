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

import { SidebarGroup } from './SidebarGroup'
import { SidebarList } from './SidebarList'
import { SidebarListItem } from './SidebarListItem'
import { SidebarRoot } from './SidebarRoot'

export type {
  /**
   * @deprecated Use `SidebarRootProps` instead
   */
  SidebarRootProps as SidebarContainerProps,
  SidebarRootProps,
} from './SidebarRoot'
export type { SidebarGroupProps } from './SidebarGroup'
export type { SidebarListProps } from './SidebarList'
export type { SidebarListItemProps } from './SidebarListItem'

export const Sidebar = {
  /**
   * @deprecated Use `Sidebar.Root` instead
   */
  Container: SidebarRoot,

  /**
   * Root element for the sidebar that positions the HTML element on the grid and provides
   * context for all sidebar elements.
   *
   * @requires `Shell.Root` as the parent element that provides the layout / context for the `Sidebar.Root`
   */
  Root: SidebarRoot,

  /**
   * Show a group of items in the sidebar with a respective title
   *
   * @requires `Sidebar.Root` - As the parent element that provides the layout / context for the `Sidebar.Group`
   */
  Group: SidebarGroup,

  /**
   * Show a list of items in the sidebar
   *
   * @requires `Sidebar.Root` - As the parent element that provides the layout / context for the `Sidebar.List`
   */
  List: SidebarList,

  /**
   * Show a list item in the sidebar
   *
   * @requires `Sidebar.List` - As the parent element that provides the layout / context for the `Sidebar.ListItem`
   */
  ListItem: SidebarListItem,
}
