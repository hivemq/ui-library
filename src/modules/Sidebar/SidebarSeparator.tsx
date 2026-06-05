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

import { Box } from '@chakra-ui/react'

export function SidebarSeparator() {
  return (
    <Box
      mx={4}
      mb={2}
      width="auto"
      height="1px"
      // Defend the 1px line against flex-shrink — when the sidebar is the
      // scroll container (`overflow-y: auto` on a flex column), default
      // `flex-shrink: 1` collapses a 1px child to 0px and the divider
      // visually disappears.
      flexShrink={0}
      bg="shell.subtle"
    />
  )
}
