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

import { Box, type BoxProps, Menu } from '@chakra-ui/react'
import { forwardRef } from 'react'

export type HeaderMenuContentItemProps = BoxProps & {
  ariaLabel: string
}

export const HeaderMenuContentItem = forwardRef<HTMLDivElement, HeaderMenuContentItemProps>(
  ({ ariaLabel, ...props }, ref) => {
    return (
      <Menu.Item asChild value="missing">
        <Box
          backgroundColor="black"
          _hover={{
            backgroundColor: 'secondary.emphasized',
          }}
          _focusVisible={{
            backgroundColor: 'secondary.emphasized',
          }}
          color="white"
          cursor="pointer"
          aria-label={ariaLabel}
          ref={ref}
          {...props}
        />
      </Menu.Item>
    )
  },
)
