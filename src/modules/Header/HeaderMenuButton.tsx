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

const BORDER_WIDTH_IN_PIXEL = 2
const MAX_CONTAINER_SIZE_IN_PIXEL = 48

export const HeaderMenuButton: React.FC<Props> = (props) => {
  const { 'aria-label': ariaLabel, icon, closeIcon = XIcon } = props
  const { isOpen } = useContext(HeaderMenuContext)

  const containerSize = MAX_CONTAINER_SIZE_IN_PIXEL - BORDER_WIDTH_IN_PIXEL

  return (
    <Menu.Trigger asChild>
      <Button
        bg={{
          base: 'transparent',
          _focusVisible: 'gray.800',
        }}
        _hover={{
          bg: 'gray.900',
        }}
        lineHeight={1}
        justifyContent="center"
        border={`${BORDER_WIDTH_IN_PIXEL}px solid ${isOpen ? '{colors.gray.400}' : 'transparent'}`}
        style={{
          width: containerSize,
          height: containerSize,
          margin: '0px',
          borderRadius: '2px',
        }}
        aria-label={ariaLabel}
      >
        <Icon w={6} height={6} as={isOpen ? closeIcon : icon} color="white" />
      </Button>
    </Menu.Trigger>
  )
}
