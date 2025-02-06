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

import { MenuItem, type MenuItemProps, forwardRef } from '@chakra-ui/react'

export type HeaderMenuContentItemProps = MenuItemProps & {}

export const HeaderMenuContentItem = forwardRef<HeaderMenuContentItemProps, 'button'>(
  ({ children, ...props }, ref) => {
    return (
      <MenuItem
        backgroundColor="black"
        _hover={{
          backgroundColor: 'neutrals.800',
        }}
        _focusVisible={{
          backgroundColor: 'neutrals.800',
        }}
        ref={ref}
        {...props}
      >
        {children}
      </MenuItem>
    )
  },
)
