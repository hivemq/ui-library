import { FC } from 'react'
import { IconButtonProps, TooltipProps, Tooltip, IconButton as CuiIconButton } from '@chakra-ui/react'

export interface IconButtonWithTooltipProps extends Omit<IconButtonProps, 'icon'> {
  icon: React.ReactElement
  tooltipProps?: Omit<TooltipProps, 'aria-label' | 'hasArrow' | 'children'>
}

export const IconButtonWithTooltip: FC<IconButtonWithTooltipProps> = ({ 'aria-label': ariaLabel, tooltipProps, ...props }) => {
  return (
    <Tooltip label={ariaLabel} placement="top" {...tooltipProps} hasArrow data-testid="icon-button-tooltip">
      <CuiIconButton aria-label={ariaLabel} {...props} />
    </Tooltip>
  )
}
