import { Menu } from "@chakra-ui/react";

import { useContext, useMemo } from "react";
import { ShellContext } from "../../context/ShellContext";

export type HeaderMenuProps = {
	/**
	 * Unique id that will be used internally to toggle between the visible elements
	 */
	overlayId: string;
};

export function HeaderMenu({
	children,
	overlayId,
}: React.PropsWithChildren<HeaderMenuProps>) {
	const context = useContext(ShellContext);

	const isOpen = useMemo(() => {
		return context.openedOverlayId === overlayId;
	}, [context.openedOverlayId, overlayId]);

	return (
		<Menu
			isLazy
			isOpen={isOpen}
			onOpen={() => context.setOpenedOverlayId?.(overlayId)}
			onClose={() => context.setOpenedOverlayId?.(undefined)}
			offset={[0, 6]}
			placement="bottom-end"
		>
			{children}
		</Menu>
	);
}
