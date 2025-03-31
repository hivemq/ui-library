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
import { Z_INDEX } from '../../constants/zIndex'
import { useShellContext } from '../../context/ShellContext'

export type SidebarRootProps = BoxProps & {}

export function SidebarRoot({ children, ...props }: React.PropsWithChildren<SidebarRootProps>) {
  const { isSidebarOpen } = useShellContext()

  return (
    isSidebarOpen && (
      <Box
        as="nav"
        position="sticky"
        width="100%"
        top="0"
        left="0"
        backgroundColor="shell.contrastBg"
        borderRight="1px solid"
        borderColor="shell.border"
        gridArea="sidebar"
        display="flex"
        flexDirection="column"
        gap={6}
        py={4}
        zIndex={Z_INDEX.SIDEBAR}
        {...props}
      >
        {children}
      </Box>
    )
  )
}
