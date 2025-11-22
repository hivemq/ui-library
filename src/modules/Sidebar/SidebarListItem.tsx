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
          fontWeight={isActive ? 700 : undefined}
          borderLeft="6px solid"
          borderColor={isActive ? 'brand.solid' : 'transparent'}
          backgroundColor={{
            base: isActive ? 'shell.subtle' : undefined,
            _hover: 'shell.muted',
            _focusVisible: 'shell.muted',
          }}
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
