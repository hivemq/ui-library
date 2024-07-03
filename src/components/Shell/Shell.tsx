import { Box, Grid } from "@chakra-ui/react";
import { useContext, useMemo } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { Z_INDEX } from '../../constants/zIndex';

export type ShellProps = {
	children: React.ReactNode;
};

export function Shell({ children }: ShellProps) {
	const { isSidebarOpen, openedOverlayId } = useContext(NavigationContext);

	const gridTemplateAreas = useMemo(() => {
		if (isSidebarOpen) {
			return `
        "header header"
        "sidebar content"
      `;
		}

		return `
      "header"
      "content"
    `;
	}, [isSidebarOpen]);

  const showBackdrop = useMemo(() => {
    return !!openedOverlayId
  }, [openedOverlayId])

	const gridTemplateColumns = useMemo(() => {
		if (isSidebarOpen) {
			return "290px 1fr";
		}

		return "1fr";
	}, [isSidebarOpen]);

	return (
		<Grid
			templateColumns={gridTemplateColumns}
			gridTemplateRows="55px 1fr"
			gridTemplateAreas={gridTemplateAreas}
			h="100vh"
			position="relative"
		>
      {children}

			{showBackdrop && (
				<Box
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					backgroundColor="yellow"
          opacity={0.3}
          zIndex={Z_INDEX.BACKDROP}
				/>
			)}
		</Grid>
	);
}
