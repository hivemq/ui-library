import * as React from 'react'

export type AppIconListProps = {
  children: React.ReactNode
}

export function AppIconList({ children }: AppIconListProps) {
  return <div className="flex gap-3 flex-wrap w-full">{children}</div>
}
