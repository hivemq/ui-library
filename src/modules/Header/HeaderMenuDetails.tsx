import { Box, type BoxProps, MenuDivider } from "@chakra-ui/react";

export type HeaderMenuDetailsProps = BoxProps & {};

export function HeaderMenuDetails({
	children,
	...props
}: HeaderMenuDetailsProps) {
	return (
		<>
			<Box backgroundColor="black" px={3} py={2} {...props}>
				{children}
			</Box>
			<MenuDivider borderColor="surface.500" />
		</>
	);
}
