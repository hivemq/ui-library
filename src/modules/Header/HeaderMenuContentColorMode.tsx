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

import { Box, HStack, Icon } from '@chakra-ui/react'
import { type LucideIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useId } from 'react'
import {
  HeaderMenuContentDetails,
  type HeaderMenuContentDetailsProps,
} from './HeaderMenuContentDetails'

/**
 * `system` follows the operating system and is the state in which neither button is pressed
 */
export type HeaderColorMode = 'light' | 'dark' | 'system'

export type HeaderMenuContentColorModeProps = HeaderMenuContentDetailsProps & {
  /**
   * The colour mode the user chose. The application owns this value; the component does not
   * store it or apply it to the document.
   */
  colorMode: HeaderColorMode
  /**
   * Called with the new colour mode. Pressing the button of the active mode again releases it
   * and reports `system`.
   */
  onColorModeChange: (colorMode: HeaderColorMode) => void
  /**
   * Accessible name of the light mode button
   * @default Light
   */
  lightLabel?: string
  /**
   * Accessible name of the dark mode button
   * @default Dark
   */
  darkLabel?: string
  /**
   * Label of the setting, for example "Theme"
   */
  children: React.ReactNode
}

type ModeButtonProps = {
  icon: LucideIcon
  label: string
  isPressed: boolean
  onClick: () => void
}

function ModeButton({ icon, label, isPressed, onClick }: ModeButtonProps) {
  return (
    <Box
      as="button"
      aria-label={label}
      aria-pressed={isPressed}
      title={label}
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={9}
      h={7}
      borderRadius="sm"
      cursor="pointer"
      color="white"
      _hover={{ backgroundColor: 'whiteAlpha.300' }}
      _focusVisible={{ outline: '2px solid', outlineColor: 'white', outlineOffset: '1px' }}
      _pressed={{
        backgroundColor: 'brand.solid',
        color: 'brand.contrast',
        _hover: { backgroundColor: 'brand.solid' },
      }}
    >
      <Icon as={icon} w={4} h={4} aria-hidden />
    </Box>
  )
}

/**
 * Two buttons for three states: light, dark, and (neither pressed) follow the system.
 */
export function HeaderMenuContentColorMode({
  colorMode,
  onColorModeChange,
  lightLabel = 'Light',
  darkLabel = 'Dark',
  children,
  ...props
}: HeaderMenuContentColorModeProps) {
  const labelId = useId()

  const select = (mode: 'light' | 'dark') => {
    onColorModeChange(colorMode === mode ? 'system' : mode)
  }

  return (
    <HeaderMenuContentDetails {...props}>
      <HStack justifyContent="space-between">
        <span id={labelId}>{children}</span>
        <HStack
          role="group"
          aria-labelledby={labelId}
          gap={0.5}
          p={0.5}
          borderRadius="md"
          backgroundColor="whiteAlpha.200"
        >
          <ModeButton
            icon={SunIcon}
            label={lightLabel}
            isPressed={colorMode === 'light'}
            onClick={() => select('light')}
          />
          <ModeButton
            icon={MoonIcon}
            label={darkLabel}
            isPressed={colorMode === 'dark'}
            onClick={() => select('dark')}
          />
        </HStack>
      </HStack>
    </HeaderMenuContentDetails>
  )
}
