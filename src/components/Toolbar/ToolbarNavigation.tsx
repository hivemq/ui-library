import classnames from 'classnames'
import * as React from 'react'

export type ToolbarNavigationProps = {
  children?: React.ReactNode
}

export function ToolbarNavigation({ children }: ToolbarNavigationProps) {
  return (
    <div className="hidden md:block">
      <ul className="flex flex-row items-center gap-7 xl:gap-10">{children}</ul>
    </div>
  )
}

type ToolbarNavigationItemProps = {
  children: React.ReactNode
  isActive?: boolean
}

export function ToolbarNavigationItem({ children, isActive = false }: ToolbarNavigationItemProps) {
  return (
    <li
      className={classnames(
        'group/item whitespace-nowrap relative before:absolute before:bottom-[-9px] before:left-[0] before:w-full before:h-[2px] before:pointer-events-none before:transition-[background]',
        {
          'before:hover:bg-white': !isActive,
          'before:bg-primary': isActive
        }
      )}
    >
      {children}
    </li>
  )
}
