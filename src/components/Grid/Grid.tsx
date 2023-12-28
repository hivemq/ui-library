import * as React from 'react'

export type GridProps = {
  children: React.ReactNode
}

export function Grid({ children }: GridProps) {
  return <div className="grid sm:grid-cols-[290px_1fr_200px] grid-rows-[auto_1fr_auto] h-screen">{children}</div>
}
