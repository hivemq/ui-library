import {Box, Icon, type BoxProps } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import { MenuIcon, XIcon } from 'lucide-react';

export type HeaderSidebarToggle = BoxProps & {

}

export function HeaderSidebarToggle({onClick, ...props}: HeaderSidebarToggle) {
  const context = useContext(NavigationContext);

  return (
    <Box _hover={{
      backgroundColor: "surface.800"
    }} _focusVisible={{
      backgroundColor: "surface.800"
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
      event.preventDefault();
      context.setSidebarOpen(!context.isSidebarOpen);
      onClick?.(event)
    }}
    >
      <Icon w={6} height={6} as={context.isSidebarOpen ? XIcon : MenuIcon} color="white" />
    </Box>
  )
}
