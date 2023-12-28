import * as React from 'react'

export type HeaderProps = {
  className?: string
  children?: React.ReactNode
}

export function Header({ className, children }: HeaderProps) {
  return (
    <header
      className={`${className ?? ''} col-span-3 flex flex-row items-center px-0 md:px-6 sticky z-40 w-full top-0 text-xl dark bg-stone-950`}
    >
      {children}
    </header>
  )
}
