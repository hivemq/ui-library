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

import { ShellContainer, ShellProvider, ShellRoot } from './ShellRoot'

export const Shell = {
  /**
   * Provider for the entire UI Shell this should be at the top of all elements,
   * even above `Shell.Root`
   *
   * @deprecated use `Shell.Root` instead since it provides functionality for both `Shell.Provider` and `Shell.Container`
   */
  Provider: ShellProvider,

  /**
   * @deprecated Use `Shell.Root` instead
   */
  Container: ShellContainer,

  /**
   * Root element for the shell that positions the HTML element on the grid and provides
   * context for all shell elements.
   */
  Root: ShellRoot,
}

export {
  /**
   * @deprecated use `ShellRootProps` instead
   */
  type ShellContainerProps as ShellProps,
  /**
   * @deprecated use `ShellRootProps` instead
   */
  type ShellContainerProps as ShellProviderProps,
  type ShellRootProps,
} from './ShellRoot'
