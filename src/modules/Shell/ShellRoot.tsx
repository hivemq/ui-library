import { Box, Grid } from "@chakra-ui/react";
import { useContext, useMemo, useState } from "react";
import { Z_INDEX } from "../../constants/zIndex";
import { ShellContext } from "../../context/ShellContext";

export type ShellContainerProps = {
  children: React.ReactNode;
  /**
   * Define whenever the sidebar should be open by default
   * @default false
   */
  isSidebarOpen?: boolean;
};

/**
 * @deprecated - Use Shell.Root instead
 * @returns
 */
export function ShellProvider({
  children,
  isSidebarOpen: isSidebarOpenDefault = false,
}: ShellContainerProps) {
  const [isSidebarOpen, setSidebarOpen] =
    useState<boolean>(isSidebarOpenDefault);
  const [openedOverlayId, setOpenedOverlayId] = useState<string | undefined>(
    undefined,
  );

  return (
    <ShellContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        openedOverlayId,
        setOpenedOverlayId,
      }}
    >
      {children}
    </ShellContext.Provider>
  );
}

/**
 * @deprecated - Use Shell.Root instead
 * @returns
 */
export function ShellContainer({ children }: ShellContainerProps) {
  const { isSidebarOpen, openedOverlayId } = useContext(ShellContext);

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
    return !!openedOverlayId;
  }, [openedOverlayId]);

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

export type ShellRootProps = {
  children: React.ReactNode;
  /**
   * Define whenever the sidebar should be open by default
   * @default false
   */
  isSidebarOpen?: boolean;
  /**
   * Define the width of your sidebar
   * @default 290px
   */
  sidebarWidth?: string;
};

export function ShellRoot({
  children,
  isSidebarOpen: isSidebarOpenDefault = true,
  sidebarWidth = "290px",
}: ShellRootProps) {
  const [isSidebarOpen, setSidebarOpen] =
    useState<boolean>(isSidebarOpenDefault);
  const [openedOverlayId, setOpenedOverlayId] = useState<string | undefined>(
    undefined,
  );

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
    return !!openedOverlayId;
  }, [openedOverlayId]);

  const gridTemplateColumns = useMemo(() => {
    if (isSidebarOpen) {
      return `${sidebarWidth} 1fr`;
    }

    return "1fr";
  }, [isSidebarOpen, sidebarWidth]);

  return (
    <ShellContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        openedOverlayId,
        setOpenedOverlayId,
      }}
    >
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
    </ShellContext.Provider>
  );
}
