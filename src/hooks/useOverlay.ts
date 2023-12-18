import { useContext } from 'react'

import { HmqOverlayTamerContext } from '@/context/HmqOverlaysTameContext'

export function useOverlayState() {
  const overlayTamerContext = useContext(HmqOverlayTamerContext)
  const setCurrentOverlayId = overlayTamerContext.setOverlayId
  const currentOverlayId = overlayTamerContext.overlayId
  const anyOverlayOpen = Boolean(currentOverlayId)
  const isOpenSideNav = currentOverlayId === 'side_nav_menu'
  return { setCurrentOverlayId, currentOverlayId, isOpenSideNav, anyOverlayOpen }
}
