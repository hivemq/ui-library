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

import { Menu, type MenuContentProps } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const HeaderMenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent(props, ref) {
    return (
      <Menu.Positioner>
        <Menu.Content
          backgroundColor="black"
          color="white"
          border="none"
          boxShadow="lg"
          borderRadius="4px"
          minW="320px"
          textAlign="left"
          ref={ref}
          {...props}
        />
      </Menu.Positioner>
    )
  },
)
