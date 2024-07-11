import { Icon, MenuButton, useMenuContext } from "@chakra-ui/react";
import { XIcon, type LucideIcon } from "lucide-react";

export type HeaderMenuButtonProps = {
  icon: LucideIcon;
};

const OPEN_MARGIN_IN_PIXEL = 4;
const BORDER_WIDTH_IN_PIXEL = 2;
const MAX_CONTAINER_SIZE_IN_PIXEL = 56;

export function HeaderMenuButton({ icon }: HeaderMenuButtonProps) {
  const { isOpen } = useMenuContext();

  const containerSize = isOpen
    ? MAX_CONTAINER_SIZE_IN_PIXEL -
    OPEN_MARGIN_IN_PIXEL * 2 -
    BORDER_WIDTH_IN_PIXEL
    : MAX_CONTAINER_SIZE_IN_PIXEL - BORDER_WIDTH_IN_PIXEL;

  return (
    <MenuButton
      _hover={{
        backgroundColor: "surface.800",
      }}
      _focusVisible={{
        backgroundColor: "surface.800",
      }}
      lineHeight={1}
      sx={{
        width: containerSize,
        height: containerSize,
        border: `${BORDER_WIDTH_IN_PIXEL}px solid`,
        borderColor: isOpen ? "surface.400" : "transparent",
        margin: isOpen ? `${OPEN_MARGIN_IN_PIXEL}px` : "0px",
        borderRadius: "2px",
      }}
    >
      <Icon w={6} height={6} as={isOpen ? XIcon : icon} color="white" />
    </MenuButton>
  );
}
