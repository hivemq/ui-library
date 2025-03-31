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
import { Button, Icon, Menu } from '@chakra-ui/react'
import { type LucideIcon, XIcon } from 'lucide-react'
import { useContext } from 'react'
import { HeaderMenuContext } from './HeaderMenu'

type Props = {
  icon: LucideIcon
  closeIcon?: LucideIcon
  'aria-label': string
}

const OPEN_MARGIN_IN_PIXEL = 4
const BORDER_WIDTH_IN_PIXEL = 2
const MAX_CONTAINER_SIZE_IN_PIXEL = 56

export const HeaderMenuButton: React.FC<Props> = (props) => {
  const { 'aria-label': _ariaLabel, icon, closeIcon = XIcon } = props
  const { isOpen } = useContext(HeaderMenuContext)

  const containerSize = isOpen
    ? MAX_CONTAINER_SIZE_IN_PIXEL - OPEN_MARGIN_IN_PIXEL * 2 - BORDER_WIDTH_IN_PIXEL
    : MAX_CONTAINER_SIZE_IN_PIXEL - BORDER_WIDTH_IN_PIXEL

  return (
    <Menu.Trigger asChild>
      <Button
        bg={{
          base: 'black',
          _hover: 'secondary.800',
          _focusVisible: 'secondary.800',
        }}
        lineHeight={1}
        justifyContent="center"
        border={`${BORDER_WIDTH_IN_PIXEL}px solid ${isOpen ? '{colors.secondary.400}' : 'transparent'}`}
        style={{
          width: containerSize,
          height: containerSize,
          margin: isOpen ? `${OPEN_MARGIN_IN_PIXEL}px` : '0px',
          borderRadius: '2px',
        }}
      >
        <Icon w={6} height={6} as={isOpen ? closeIcon : icon} color="white" />
      </Button>
    </Menu.Trigger>
  )
}
