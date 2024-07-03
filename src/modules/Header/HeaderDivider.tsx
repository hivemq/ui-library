import { Divider, type DividerProps } from "@chakra-ui/react";

export type HeaderDividerProps = DividerProps & {};

export function HeaderDivider({ ...props }: HeaderDividerProps) {
	return (
		<Divider
			orientation="vertical"
			height="auto"
			borderLeft="2px solid"
			borderColor="surface.400"
			margin={4}
			{...props}
		/>
	);
}
