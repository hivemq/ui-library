import { Box, type BoxProps } from "@chakra-ui/react";
import { NavigationContext } from "../../context/NavigationContext";
import { useContext } from "react";
import { Z_INDEX } from '../../constants/zIndex';

export type SidebarProps = BoxProps & {};

export function Sidebar({
	children,
	...props
}: React.PropsWithChildren<SidebarProps>) {
	const context = useContext(NavigationContext);

	return (
		context.isSidebarOpen && (
			<Box
				as="nav"
				position="sticky"
				width="100%"
				top="0"
				left="0"
				backgroundColor="white"
				borderRight="1px solid surface.400"
        gridArea="sidebar"
        display="flex"
        flexDirection="column"
        gap={6}
        py={4}
        zIndex={Z_INDEX.SIDEBAR}
				{...props}
			>
				{children}
			</Box>
		)
	);
}
