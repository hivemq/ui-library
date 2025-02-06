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

import { Box, type BoxProps, ListItem, forwardRef } from '@chakra-ui/react'

export type SidebarListItemProps = BoxProps & {
  /**
   * Define whenever the sidebar item is active
   */
  isActive?: boolean
}

export const SidebarListItem = forwardRef<SidebarListItemProps, 'button'>(
  ({ children, isActive, ...props }, ref) => {
    return (
      <ListItem>
        <Box
          as="button"
          type="button"
          borderLeft="6px solid"
          borderColor={isActive ? 'border.border-brand' : 'transparent'}
          fontWeight={isActive ? 'border.border-brand' : 'transparent'}
          textAlign="left"
          backgroundColor={isActive ? 'background.bg-active-hover' : 'transparent'}
          p={2}
          pl={4}
          _hover={{
            backgroundColor: 'background.bg-active-hover',
          }}
          _focusVisible={{
            backgroundColor: 'background.bg-active-hover',
          }}
          display="block"
          w="100%"
          ref={ref}
          {...props}
        >
          {children}
        </Box>
      </ListItem>
    )
  },
)
