import { Slot } from '@radix-ui/react-slot'
import classnames from 'classnames'
import * as React from 'react'

import { NavigationContext, NavigationItem } from '../../context/NavigationContext'

export type HeaderNavigationProps = {
  children?: React.ReactNode
}

export function HeaderNavigation({ children }: HeaderNavigationProps) {
  return (
    <div className="hidden md:block">
      <ul className="flex flex-row items-center gap-7 xl:gap-10">{children}</ul>
    </div>
  )
}

type HeaderNavigationItemProps = {
  children: React.ReactNode
  item: NavigationItem
}

export function HeaderNavigationItem({ children, item }: HeaderNavigationItemProps) {
  const context = React.useContext(NavigationContext)

  const isActive = React.useMemo(() => {
    return context.isHeaderNavigationItemActive(item)
  }, [context.navigation, context.isHeaderNavigationItemActive])

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
      <Slot
        className={classnames('group-hover/item:text-white py-4 transition-[color]', {
          'text-white/75': !isActive,
          'text-white': isActive
        })}
      >
        {children}
      </Slot>
    </li>
  )
}
