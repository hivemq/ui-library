import { List, type ListProps } from '@chakra-ui/react';

export type SidebarList = ListProps & {

}

export function SidebarList({children, ...props}: SidebarList) {
  return (
    <List width="100%" {...props}>
      {children}
    </List>
  )
}
