import * as React from 'react'

export type HeaderAppIconListProps = {
  children: React.ReactNode
}

export function HeaderAppIconList({ children }: HeaderAppIconListProps) {
  return <div className="flex gap-3 flex-wrap w-full">{children}</div>
}
