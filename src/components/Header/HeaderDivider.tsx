import { Divider } from "@chakra-ui/react";

export function HeaderDivider() {
	return (
		<Divider
			orientation="vertical"
			height="auto"
			borderLeft="2px solid"
			borderColor="surface.400"
			margin={4}
		/>
	);
}
