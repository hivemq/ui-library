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
import { Icon, MenuButton, forwardRef, useMenuContext } from '@chakra-ui/react'
import { type LucideIcon, XIcon } from 'lucide-react'

export type HeaderMenuButtonProps = {
  icon: LucideIcon
  closeIcon?: LucideIcon
  'aria-label': string
}

const OPEN_MARGIN_IN_PIXEL = 4
const BORDER_WIDTH_IN_PIXEL = 2
const MAX_CONTAINER_SIZE_IN_PIXEL = 56

export const HeaderMenuButton = forwardRef<HeaderMenuButtonProps, 'button'>((props, ref) => {
  const { 'aria-label': _ariaLabel, as, icon, closeIcon = XIcon } = props
  const { isOpen } = useMenuContext()

  const containerSize = isOpen
    ? MAX_CONTAINER_SIZE_IN_PIXEL - OPEN_MARGIN_IN_PIXEL * 2 - BORDER_WIDTH_IN_PIXEL
    : MAX_CONTAINER_SIZE_IN_PIXEL - BORDER_WIDTH_IN_PIXEL

  return (
    <MenuButton
      _hover={{
        backgroundColor: 'surface.800',
      }}
      _focusVisible={{
        backgroundColor: 'surface.800',
      }}
      lineHeight={1}
      sx={{
        width: containerSize,
        height: containerSize,
        border: `${BORDER_WIDTH_IN_PIXEL}px solid`,
        borderColor: isOpen ? 'surface.400' : 'transparent',
        margin: isOpen ? `${OPEN_MARGIN_IN_PIXEL}px` : '0px',
        borderRadius: '2px',
      }}
      as={as}
      ref={ref}
      {...props}
    >
      <Icon w={6} height={6} as={isOpen ? closeIcon : icon} color="white" />
    </MenuButton>
  )
})
