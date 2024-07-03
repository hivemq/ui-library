import { Box, Icon, type BoxProps } from "@chakra-ui/react";
import { useContext } from "react";
import { ShellContext } from "../../context/ShellContext";
import { MenuIcon, XIcon } from "lucide-react";

export type HeaderSidebarToggleProps = BoxProps & {};

export function HeaderSidebarToggle({
	onClick,
	...props
}: HeaderSidebarToggleProps) {
	const context = useContext(ShellContext);

	return (
		<Box
			_hover={{
				backgroundColor: "surface.800",
			}}
			_focusVisible={{
				backgroundColor: "surface.800",
			}}
			type="button"
			as="button"
			sx={{
				width: "55px",
				height: "55px",
			}}
			lineHeight={1}
			{...props}
			onClick={(event) => {
				event.preventDefault();
				context.setSidebarOpen(!context.isSidebarOpen);
				onClick?.(event);
			}}
		>
			<Icon
				w={6}
				height={6}
				as={context.isSidebarOpen ? XIcon : MenuIcon}
				color="white"
			/>
		</Box>
	);
}
