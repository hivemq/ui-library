import { Box, ListItem, type BoxProps, forwardRef } from "@chakra-ui/react";


export type SidebarListItemProps = BoxProps & {
  /**
   * Define whenever the sidebar item is active
   */
  isActive?: boolean;
};

export const SidebarListItem = forwardRef<SidebarListItemProps, 'button'>(({ children, isActive, ...props }, ref) => {
  return (
    <ListItem>
      <Box
        as="button"
        type="button"
        borderLeft="6px solid"
        borderColor={isActive ? "primary.400" : "transparent"}
        textAlign="left"
        backgroundColor={isActive ? "surface.100" : "transparent"}
        p={2}
        pl={4}
        _hover={{
          backgroundColor: "surface.200",
        }}
        _focusVisible={{
          backgroundColor: "surface.200",
        }}
        w="100%"
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    </ListItem>
  );
})
