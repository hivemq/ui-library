import { MenuItem, type MenuItemProps, forwardRef } from "@chakra-ui/react";

export type HeaderMenuContentItemProps = MenuItemProps & {};

export const HeaderMenuContentItem = forwardRef<
  HeaderMenuContentItemProps,
  "button"
>(({ children, ...props }, ref) => {
  return (
    <MenuItem
      backgroundColor="black"
      _hover={{
        backgroundColor: "surface.800",
      }}
      _focusVisible={{
        backgroundColor: "surface.800",
      }}
      ref={ref}
      {...props}
    >
      {children}
    </MenuItem>
  );
});
