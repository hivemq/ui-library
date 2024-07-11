import { ContentRoot } from "./ContentRoot";

// ?TODO: Remove deprecated items in the next version

export const Content = {
  /**
   * @deprecated Use Content.Root instead
   */
  Base: ContentRoot,
  /**
   * Root element for the UI Shell content that positions the HTML element on the grid and provides
   * @requires Shell.Root - As the parent element that provides the layout / context for the Content.Root
   */
  Root: ContentRoot,
};

export {
  /**
   * @deprecated use ContentRootProps instead
   */
  type ContentRootProps as ContentProps,
  type ContentRootProps,
} from "./ContentRoot";
