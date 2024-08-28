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

import { Menu } from '@chakra-ui/react'

import { useContext, useMemo } from 'react'
import { ShellContext } from '../../context/ShellContext'

export type HeaderMenuProps = {
  /**
   * Unique id that will be used internally to toggle between the visible elements
   */
  overlayId: string
}

export function HeaderMenu({ children, overlayId }: React.PropsWithChildren<HeaderMenuProps>) {
  const context = useContext(ShellContext)

  const isOpen = useMemo(() => {
    return context.openedOverlayId === overlayId
  }, [context.openedOverlayId, overlayId])

  return (
    <Menu
      isLazy
      isOpen={isOpen}
      onOpen={() => context.setOpenedOverlayId?.(overlayId)}
      onClose={() => context.setOpenedOverlayId?.(undefined)}
      offset={[0, 6]}
      placement="bottom-end"
    >
      {children}
    </Menu>
  )
}
