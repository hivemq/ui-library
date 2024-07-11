import { List, type ListProps } from "@chakra-ui/react";

export type SidebarListProps = ListProps & {};

export function SidebarList({ children, ...props }: SidebarListProps) {
  return (
    <List width="100%" {...props}>
      {children}
    </List>
  );
}
