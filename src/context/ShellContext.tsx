import * as React from 'react'

export type ShellProviderValue = {
  isSidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  openedOverlayId?: string
  setOpenedOverlayId?: (value: string | undefined) => void
}

export const ShellContext = React.createContext<ShellProviderValue>({
  isSidebarOpen: false,
  setSidebarOpen: () => void 0,
  openedOverlayId: undefined,
  setOpenedOverlayId: () => void 0,
})
