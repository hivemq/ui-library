import * as React from 'react'

export type PanelProps = {
  children: React.ReactNode
  className?: string
}

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={
        className +
        ' absolute top-[58px] right-0 text-base min-w-96 text-white bg-stone-950 border-[2px] border-r-0 border-white/20 max-h-[90vh] overflow-y-scroll shadow-lg'
      }
    >
      {children}
    </div>
  )
}
