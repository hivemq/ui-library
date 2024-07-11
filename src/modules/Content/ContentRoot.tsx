import { GridItem, type GridItemProps } from "@chakra-ui/react";

export type ContentRootProps = GridItemProps & {
  children: React.ReactNode;
  canOverflowXScroll?: boolean;
};

// TODO: apply responsive styles
export function ContentRoot({
  children,
  canOverflowXScroll: overflowX,
  ...props
}: ContentRootProps) {
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
