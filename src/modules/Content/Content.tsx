import { GridItem, type GridItemProps } from "@chakra-ui/react";

export type ContentContainerProps = GridItemProps & {
	children: React.ReactNode;
	canOverflowXScroll?: boolean;
};

// TODO: apply responsive styles
export function ContentContainer({
	children,
	canOverflowXScroll: overflowX,
	...props
}: ContentContainerProps) {
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
