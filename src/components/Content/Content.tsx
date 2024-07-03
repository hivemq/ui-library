import { GridItem, type GridItemProps } from "@chakra-ui/react";

export type ContentProps = GridItemProps & {
	children: React.ReactNode;
	canOverflowXScroll?: boolean;
};

// TODO: apply responsive styles
export function Content({
	children,
	canOverflowXScroll: overflowX,
	...props
}: ContentProps) {
	return (
		<GridItem
			overflowX={overflowX ? "scroll" : "hidden"}
			gridArea="content"
			p={8}
			{...props}
		>
			{children}
		</GridItem>
	);
}
