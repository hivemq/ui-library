import { Box, type BoxProps, Icon } from '@chakra-ui/react'
import { MenuIcon, XIcon } from 'lucide-react'
import { useContext, useMemo } from 'react'
import { ShellContext } from '../../context/ShellContext'

export type HeaderSidebarToggleProps = BoxProps & {}

export function HeaderSidebarToggle({ onClick, ...props }: HeaderSidebarToggleProps) {
  const context = useContext(ShellContext)
  // biome-ignore lint/correctness/useExhaustiveDependencies: needs initial value
  const wasInitiallyOpen = useMemo(() => context.isSidebarOpen, [])

  return (
    <Box
      _hover={{
        backgroundColor: 'surface.800',
      }}
      _focusVisible={{
        backgroundColor: 'surface.800',
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
        context.setSidebarOpen(!context.isSidebarOpen)
        onClick?.(event)
      }}
      aria-label={'Menu Toggle'}
    >
      <Icon
        w={6}
        height={6}
        as={context.isSidebarOpen && !wasInitiallyOpen ? XIcon : MenuIcon}
        color="white"
      />
    </Box>
  )
}
