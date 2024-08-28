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

import {
  IconButton as CuiIconButton,
  type IconButtonProps,
  Tooltip,
  type TooltipProps,
} from '@chakra-ui/react'
import type { FC } from 'react'

export interface IconButtonWithTooltipProps extends Omit<IconButtonProps, 'icon'> {
  icon: React.ReactElement
  tooltipProps?: Omit<TooltipProps, 'aria-label' | 'hasArrow' | 'children'>
}

export const IconButtonWithTooltip: FC<IconButtonWithTooltipProps> = ({
  'aria-label': ariaLabel,
  tooltipProps,
  ...props
}) => {
  return (
    <Tooltip
      label={ariaLabel}
      placement="top"
      {...tooltipProps}
      hasArrow
      data-testid="icon-button-tooltip"
    >
      <CuiIconButton aria-label={ariaLabel} {...props} />
    </Tooltip>
  )
}
