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

import { Box, type BoxProps, List } from '@chakra-ui/react'
import { forwardRef } from 'react'

export type SidebarListItemProps = BoxProps & {
  /**
   * Define whenever the sidebar item is active
   */
  isActive?: boolean
}

const activeBg = { base: 'secondary.muted', _dark: 'secondary.emphasized' }

export const SidebarListItem = forwardRef<HTMLLIElement, SidebarListItemProps>(
  ({ children, isActive, ...props }, ref) => {
    return (
      <List.Item>
        <Box
          p={2}
          pl={4}
          display="block"
          width="100%"
          textAlign="left"
          color="content.primary"
          borderLeft="6px solid"
          borderColor="transparent"
          // `bg.muted` is an alpha overlay, so it reads as a hover in both modes
          // on top of the `bg.panel` sidebar without per-mode tokens.
          _hover={{ bg: 'bg.muted' }}
          _focusVisible={{ bg: 'bg.muted' }}
          // The active item is marked via `aria-current` for assistive tech and
          // `data-current` for styling (Chakra's `_current` only matches
          // `[data-current]`). Nesting `_hover` inside `_current` keeps the
          // active background on hover instead of swapping to the hover overlay.
          _current={{
            fontWeight: 700,
            borderColor: 'brand.solid',
            bg: activeBg,
            _hover: { bg: activeBg },
            _focusVisible: { bg: activeBg },
          }}
          aria-current={isActive ? 'page' : undefined}
          data-current={isActive ? '' : undefined}
          cursor="pointer"
          ref={ref}
          {...props}
        >
          {children}
        </Box>
      </List.Item>
    )
  },
)
