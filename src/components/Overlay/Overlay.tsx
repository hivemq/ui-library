import * as React from 'react'

export type OverlayProps = {
  onClick: React.HTMLAttributes<HTMLDivElement>['onClick']
}

export function Overlay({ onClick }: OverlayProps) {
  return <div className="fixed w-full h-full z-10 panel-overlay bg-overlay/50" onClick={onClick}></div>
}
