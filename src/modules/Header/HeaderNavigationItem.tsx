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

import { Box, type BoxProps } from '@chakra-ui/react'

export type HeaderNavigationItemProps = BoxProps & {
  /**
   * Define whenever this item is active or not
   */
  isActive?: boolean
}

export function HeaderNavigationItem({ children, isActive, ...props }: HeaderNavigationItemProps) {
  return (
    <Box
      as="button"
      type="button"
      color="white"
      {...props}
      borderBottom="4px solid"
      px={4}
      pt="4px"
      borderColor={isActive ? 'border.border-brand' : 'transparent'}
      _hover={{
        backgroundColor: 'neutrals.800',
      }}
      _focusVisible={{
        backgroundColor: 'neutrals.800',
      }}
      fontSize="1.1rem"
      fontWeight={500}
    >
      {children}
    </Box>
  )
}
