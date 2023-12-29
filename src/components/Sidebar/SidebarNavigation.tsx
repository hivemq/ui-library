import { Slot } from '@radix-ui/react-slot'
import classnames from 'classnames'
import * as React from 'react'

import { NavigationContext, SidebarNavigationItem } from '../../context/NavigationContext'
import { activeItem, defaultPadding, hoverLink, activeLink } from '../../utils/classNames'

export type SidebarProps = {
  isOpenMenu: boolean
  pageNeedsFullscreen?: boolean
  children?: React.ReactNode
}

export function Sidebar({ children, pageNeedsFullscreen }: SidebarProps) {
  const context = React.useContext(NavigationContext)

  const sidebarNavigation = React.useMemo(() => {
    return context.getActiveNavigationItem()?.sidebarNavigation
  }, [context.navigation, context.isHeaderNavigationItemActive])

  return (
    <nav
      className={classnames(
        'md:text-base md:static fixed md:pb-4 pb-12 top-[74px] w-10/12 md:w-auto text-lg bg-white dark:bg-stone-900 border-r border-b md:border-b-0 border-stone-200 dark:border-stone-800 z-20 font-medium text-typo-muted dark:text-stone-300',
        {
          'md:block md:pb-0': !pageNeedsFullscreen,
          hidden: !context.isSidebarOpen,
          block: context.isSidebarOpen,
          'md:hidden': !sidebarNavigation
        }
      )}
    >
      {children}
    </nav>
  )
}

type SidebarNavigationProps = {
  children: (options: { item: SidebarNavigationItem; isActive: boolean }) => React.ReactNode
}

export function SidebarNavigation({ children }: SidebarNavigationProps) {
  const context = React.useContext(NavigationContext)

  const sidebarNavigation = React.useMemo(() => {
    return context.getActiveNavigationItem()?.sidebarNavigation
  }, [context.navigation, context.isHeaderNavigationItemActive])

  return (
    <>
      <ul className="block md:hidden">
        {context.navigation?.map((item, itemIndex) => {
          const active = context.isHeaderNavigationItemActive(item)

          return (
            <li
              key={`main_side_${itemIndex}`}
              className={classnames('relative', {
                [activeItem]: active
              })}
            >
              <Slot
                className={classnames(`${hoverLink} ${defaultPadding}`, {
                  [activeLink]: active
                })}
              >
                {children({
                  isActive: active,
                  item: item
                })}
              </Slot>
            </li>
          )
        })}
      </ul>

      {sidebarNavigation && (
        <ul className="pt-6">
          {sidebarNavigation?.map((section, sectionIndex) => (
            <li
              key={`section_${sectionIndex}`}
              className={classnames(
                'relative mb-5 before:absolute before:left-0 before:-bottom-3 before:mx-6 before:h-px before:w-[calc(100%-3rem)] before:bg-stone-300 dark:before:bg-stone-700'
              )}
            >
              <span className={`pt-3 ${defaultPadding} text-sm text-stone-800 dark:text-stone-300 uppercase`}>{section.sectionName}</span>

              <ul>
                {section.items.map((sideNavItem, sideNavIndex) => {
                  // if (sideNavItem.subItems?.length) {
                  //   return (
                  //     <SidebarNavigationItemCollapsed
                  //       key={`side_subitem_${sideNavIndex}`}
                  //       isRootActive={isRootActive}
                  //       isHrefActive={isHrefActive}
                  //       sideNavItem={sideNavItem}
                  //       renderNavLink={renderNavLink}
                  //     />
                  //   )
                  // }

                  const active = context.isSidebarNavigationItemActive(sideNavItem)

                  return (
                    <li
                      key={`side_${sideNavIndex}`}
                      className={classnames('relative', {
                        [activeItem]: active
                      })}
                    >
                      <Slot
                        className={classnames(`${hoverLink} ${defaultPadding}`, {
                          [activeLink]: active
                        })}
                      >
                        {children({
                          isActive: active,
                          item: sideNavItem
                        })}
                      </Slot>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
