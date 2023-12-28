import classnames from 'classnames'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import * as React from 'react'
import { useEffect, useState } from 'react'

import { RenderNavLinkCallback, SideNavItem } from '../../@types/Navigation.types'
import { activeItem, defaultPadding, hoverLink, activeLink } from '../../utils/classNames'

export type SidebarNavigationItemCollapsedProps = {
  isHrefActive: (href: string) => boolean
  isRootActive: (root: string) => boolean
  sideNavItem: SideNavItem
  renderNavLink: RenderNavLinkCallback
}

export function SidebarNavigationItemCollapsed({
  isHrefActive,
  isRootActive,
  sideNavItem,
  renderNavLink
}: SidebarNavigationItemCollapsedProps) {
  const rootActive = sideNavItem.root && isRootActive(sideNavItem.root)
  const active = rootActive || isHrefActive(sideNavItem.href)
  const [isOpen, setOpen] = useState<boolean>(Boolean(sideNavItem.forceOpen))

  useEffect(() => {
    if (active) {
      setOpen(active)
    }
  }, [active])

  return (
    <li className="relative">
      <a
        href="#"
        className={classnames(`flex flex-row justify-between items-center ${defaultPadding} ${hoverLink}`, {
          'text-stone-950 dark:text-white': active
        })}
        onClick={(event) => {
          event.preventDefault()
          setOpen((open) => !open)
        }}
      >
        {sideNavItem.name}
        <span
          className={classnames('w-6 h-6 transition-colors duration-300', {
            'text-stone-400': !isOpen,
            'text-stone-900': isOpen
          })}
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </a>
      {isOpen && (
        <ul>
          {sideNavItem.subItems?.map((subItemNavItem, subItemNavIndex) => {
            const active = isHrefActive(subItemNavItem.href)
            return (
              <li
                key={`subitem_${subItemNavIndex}`}
                className={classnames('relative', {
                  [activeItem]: active
                })}
              >
                {renderNavLink(
                  subItemNavItem,
                  classnames(`${defaultPadding} ${hoverLink} pl-12 `, {
                    'font-normal': !active,
                    [activeLink]: active
                  })
                )}
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
