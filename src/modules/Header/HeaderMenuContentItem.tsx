import { MenuItem, type MenuItemProps } from "@chakra-ui/react";

export type HeaderMenuContentItemProps = MenuItemProps & {};

export function HeaderMenuContentItem({ children, ...props }: HeaderMenuContentItemProps) {
  return (
    <MenuItem
      backgroundColor="black"
      _hover={{
        backgroundColor: "surface.800",
      }}
      _focusVisible={{
        backgroundColor: "surface.800",
      }}
      {...props}
    >
      {children}
    </MenuItem>
  );
}
