import { useContext } from 'react'

import { OverlayContext } from '@/context/OverlayContext'

export function useOverlayState() {
  const overlayTamerContext = useContext(OverlayContext)
  const setCurrentOverlayId = overlayTamerContext.setOverlayId
  const currentOverlayId = overlayTamerContext.overlayId
  const anyOverlayOpen = Boolean(currentOverlayId)
  const isOpenSideNav = currentOverlayId === 'side_nav_menu'
  return { setCurrentOverlayId, currentOverlayId, isOpenSideNav, anyOverlayOpen }
}
