import classnames from 'classnames'
import * as React from 'react'

export type ContentProps = {
  children: React.ReactNode
  overflowX?: boolean
}

export function Content({ children, overflowX }: ContentProps) {
  return <div className={classnames('md:col-start-2 md:col-span-2 col-span-3', { 'overflow-x-scroll': overflowX })}>{children}</div>
}
