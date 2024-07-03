import { MenuItem, type MenuItemProps } from "@chakra-ui/react";

export type HeaderMenuItemProps = MenuItemProps & {};

export function HeaderMenuItem({ children, ...props }: HeaderMenuItemProps) {
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
