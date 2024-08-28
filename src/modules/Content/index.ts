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

import { ContentRoot } from './ContentRoot'

// ?TODO: Remove deprecated items in the next version

export const Content = {
  /**
   * @deprecated Use Content.Root instead
   */
  Base: ContentRoot,
  /**
   * Root element for the UI Library content that positions the HTML element on the grid and provides
   * @requires Shell.Root - As the parent element that provides the layout / context for the Content.Root
   */
  Root: ContentRoot,
}

export {
  /**
   * @deprecated use ContentRootProps instead
   */
  type ContentRootProps as ContentProps,
  type ContentRootProps,
} from './ContentRoot'
