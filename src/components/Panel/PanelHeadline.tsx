import * as React from 'react'

export type PanelHeadlineProps = {
  children: React.ReactNode
}

export function PanelHeadline({ children }: PanelHeadlineProps) {
  return <h4 className="py-2 font-display text-2xl font-semibold">{children}</h4>
}
