import { ShellContainer, ShellProvider, ShellRoot } from './ShellRoot'

export const Shell = {
  /**
   * Provider for the entire UI Kit this should be at the top of all elements,
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
  type ShellRootProps
} from './ShellRoot'

