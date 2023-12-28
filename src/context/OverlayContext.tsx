import React, { createContext, useState } from 'react'

export type HmqOverlayTamerProviderValue = {
  overlayId: string | undefined
  setOverlayId: (overlayId?: string) => void
}

export const OverlayContext = createContext<HmqOverlayTamerProviderValue>({
  overlayId: undefined,
  setOverlayId: () => {}
})

type HmqOverlayTamerProviderProps = {
  children?: React.ReactNode
}

export const OverlayProvider: React.FC<HmqOverlayTamerProviderProps> = ({ children }) => {
  const [overlayId, setOverlayId] = useState<string>()

  return (
    <OverlayContext.Provider
      value={{
        overlayId,
        setOverlayId: (newOverlayId?: string) => {
          if (newOverlayId) {
            setOverlayId(newOverlayId)
          } else {
            setOverlayId(undefined)
          }
        }
      }}
    >
      {children}
    </OverlayContext.Provider>
  )
}
