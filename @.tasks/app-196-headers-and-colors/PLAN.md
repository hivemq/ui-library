# Plan: Fix Theme Colors and Accessibility Issues

## Overview
This plan addresses the following issues:
1. ~~Replace deprecated "shell.*" color tokens with semantic tokens~~ **OUT OF SCOPE** (kept for future reference)
2. Fix primitive color usage (gray.700) to support color modes
3. Fix missing aria-label implementations in Header components

## Background

### Semantic vs Primitive Colors
- **Primitive colors** (e.g., `gray.700`) don't support color modes (light/dark)
- **Semantic tokens** (e.g., `bg`, `secondary.fg`) automatically adapt to color mode
  - `bg` → gray.50 in light mode, gray.950 in dark mode
  - `secondary.fg` → gray.200 in light mode, gray.500 in dark mode

### Shell Palette Deprecation
The "shell" semantic color palette is deprecated and should not be used. All shell.* tokens need to be replaced with proper semantic tokens.

## 1. Replace Deprecated Shell Color Tokens ⚠️ OUT OF SCOPE

**Note:** This is currently out of scope but kept here for future reference.

### Files to Update (for future work):

#### `src/modules/Shell/ShellRoot.tsx`
- Line 100: `shell.bg` → `bg`

#### `src/modules/Sidebar/SidebarRoot.tsx`
- Line 34: `shell.contrastBg` → `bg` or `secondary.subtle`
- Line 36: `shell.border` → `border` or `secondary.emphasized`

#### `src/modules/Sidebar/SidebarListItem.tsx`
- Line 37: `shell.item` → `content.primary`
- Line 42: `shell.subtle` → `secondary.subtle`
- Lines 43-44: `shell.muted` → `secondary.muted`

#### `src/modules/Sidebar/SidebarGroup.tsx`
- Line 34: `shell.group` → `content.secondary`

#### `src/modules/Sidebar/SidebarSeparator.tsx`
- Line 27: `shell.subtle` → `secondary.emphasized`

## 2. Fix Header Menu Hover Colors

### `src/modules/Header/HeaderMenuContentItem.tsx`
- Lines 26, 29: Replace `gray.700` with `secondary.emphasized`
- This provides proper color mode support for hover/focus states

## 3. Fix Aria-Label Implementation

### `src/modules/Header/HeaderMenu.tsx`
**Issue:** Has `overlayId` prop but doesn't use it as aria-label
**Fix:** Apply `overlayId` as `aria-label` on the Menu.Root component

### `src/modules/Header/HeaderMenuContentItem.tsx`
**Issue:** Doesn't accept or apply aria-label
**Fix:**
- Add `ariaLabel` prop to component interface (made mandatory for accessibility)
- Apply it to the Menu.Item component
- Update all usages in demo files:
  - `src/modules/Header/Header.stories.tsx`
  - `src/docs/cookbook/FullDemo.tsx`

### `src/modules/Header/HeaderMenuButton.tsx`
**Issue:** Accepts `aria-label` prop but doesn't use it (destructured as `_ariaLabel`)
**Fix:** Actually apply the aria-label to the Button component

## 4. Optional Improvements (Future Consideration)

Consider updating other semantic colors already in use:
- `secondary.800` → `secondary.emphasized`
- `secondary.400` → `secondary.focusRing`
- `secondary.700` → `secondary.emphasized`

## Expected Outcomes

After completing this plan:
- ⏸️ All deprecated shell tokens removed - **OUT OF SCOPE** (deferred to future work)
- ✅ Fixed primitive color (gray.700) to use semantic token (secondary.emphasized)
- ✅ Improved accessibility with proper aria-labels in Header components
- ✅ HeaderMenuContentItem now requires ariaLabel prop for better accessibility
- ⏳ Better color mode support - pending theme configuration fix for `bg` token

## Notes

- Header components are wrapped in dark theme context (`className="chakra-theme dark"`)
- Keep `black` and `white` colors in Header components as they're intentionally dark-themed
- The theme definitions are in `@hivemq/ui-theme` package and `../ui-theme-2/theme`

### Known Issue: `bg` Token Resolution

The `bg` semantic token is defined correctly in ui-theme as:
- `base: '{colors.gray.50}'` / `_dark: '{colors.gray.950}'`

However, Chakra's `defaultConfig` has:
- `_light: '{colors.white}'` / `_dark: '{colors.black}'`

When merged with `createSystem(defaultConfig, config)`, the defaultConfig's `_light: white` overrides our `base: gray.50` due to syntax mismatch. This needs to be resolved either in ui-theme (by using `_light` instead of `base`) or in the Storybook theme configuration.
