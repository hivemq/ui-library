import { Box, type BoxProps } from "@chakra-ui/react";
import { ShellContext } from "../../context/ShellContext";
import { useContext } from "react";
import { Z_INDEX } from "../../constants/zIndex";

export type SidebarContainerProps = BoxProps & {};

export function SidebarContainer({
	children,
	...props
}: React.PropsWithChildren<SidebarContainerProps>) {
	const context = useContext(ShellContext);

	return (
		context.isSidebarOpen && (
			<Box
				as="nav"
				position="sticky"
				width="100%"
				top="0"
				left="0"
				backgroundColor="white"
				borderRight="1px solid"
				borderColor="surface.200"
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
