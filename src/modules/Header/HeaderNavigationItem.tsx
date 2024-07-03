import { Box, type BoxProps } from "@chakra-ui/react";

export type HeaderNavigationItemProps = BoxProps & {
	/**
	 * Define whenever this item is active or not
	 */
	isActive?: boolean;
};

export function HeaderNavigationItem({
	children,
	isActive,
	...props
}: HeaderNavigationItemProps) {
	return (
		<Box
			as="button"
			type="button"
			color="white"
			{...props}
			borderBottom="4px solid"
			px={4}
			pt="4px"
			borderColor={isActive ? "primary.500" : "transparent"}
			_hover={{
				backgroundColor: "surface.800",
			}}
			_focusVisible={{
				backgroundColor: "surface.800",
			}}
			fontSize="1.1rem"
			fontWeight={500}
		>
			{children}
		</Box>
	);
}
