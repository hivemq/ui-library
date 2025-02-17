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

import { Box, type BoxProps, Icon } from '@chakra-ui/react'
import { MenuIcon, XIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useShellContext } from '../../context/ShellContext'

export type HeaderSidebarToggleProps = BoxProps & {}

export function HeaderSidebarToggle({ onClick, ...props }: HeaderSidebarToggleProps) {
  const { isSidebarOpen, setSidebarOpen } = useShellContext()
  // biome-ignore lint/correctness/useExhaustiveDependencies: needs initial value
  const wasInitiallyOpen = useMemo(() => isSidebarOpen, [])

  return (
    <Box
      _hover={{
        backgroundColor: 'neutrals.800',
      }}
      _focusVisible={{
        backgroundColor: 'neutrals.800',
      }}
      type="button"
      as="button"
      sx={{
        width: '55px',
        height: '55px',
      }}
      lineHeight={1}
      {...props}
      onClick={(event) => {
        event.preventDefault()
        setSidebarOpen(!isSidebarOpen)
        onClick?.(event)
      }}
      aria-label={'Menu Toggle'}
    >
      <Icon
        w={6}
        height={6}
        as={isSidebarOpen && !wasInitiallyOpen ? XIcon : MenuIcon}
        color="white"
      />
    </Box>
  )
}
