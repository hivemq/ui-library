import { MenuList, type MenuListProps, useMenuContext } from "@chakra-ui/react";

export type HeaderMenuContentProps = MenuListProps & {
  children?: React.ReactNode;
};

export function HeaderMenuContent({
  children,
  ...props
}: HeaderMenuContentProps) {
  const context = useMenuContext();

  return (
    context.isOpen && (
      <MenuList
        backgroundColor="black"
        color="white"
        border="none"
        boxShadow="lg"
        borderRadius="4px"
        minW="320px"
        textAlign="left"
        {...props}
      >
        {children}
      </MenuList>
    )
  );
}
