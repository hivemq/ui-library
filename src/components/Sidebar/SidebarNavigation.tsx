import classnames from 'classnames'
import * as React from 'react'
import { useMemo } from 'react'

import { MainNavigation, RenderNavLinkCallback } from '../../@types/Navigation.types'
import { activeItem, defaultPadding, hoverLink, activeLink } from '../../utils/classNames'

import { SidebarNavigationItemCollapsed } from './SidebarNavigationItemCollapsed'

export type SidebarProps = {
  isOpenMenu: boolean
  pageNeedsFullscreen?: boolean
  children?: React.ReactNode
}

export function Sidebar({ children, isOpenMenu, pageNeedsFullscreen }: SidebarProps) {
  return (
    <nav
      className={classnames(
        'md:text-base md:static fixed md:pb-4 pb-12 top-14 w-10/12 md:w-auto text-lg bg-white dark:bg-stone-900 border-r border-b md:border-b-0 border-stone-200 dark:border-stone-800 z-20 font-medium text-typo-muted dark:text-stone-300',
        {
          'md:block md:pb-0': !pageNeedsFullscreen,
          hidden: !isOpenMenu,
          block: isOpenMenu
        }
      )}
    >
      <ul className="pt-6">{children}</ul>
    </nav>
  )
}

type SidebarNavigationProps = {
  /**
   * Highlight visually if the sidebar item is active
   * @param href
   * @returns
   */
  isHrefActive: (href: string) => boolean
  /**
   * Only sidebar items that return true will be rendered
   * @param root
   * @returns
   */
  isRootActive: (root: string) => boolean
  navigation: MainNavigation
  renderNavLink: RenderNavLinkCallback
}

export function SidebarNavigation({ isHrefActive, isRootActive, navigation, renderNavLink }: SidebarNavigationProps) {
  const selectedSideNav = useMemo(() => navigation.find((item) => isRootActive(item.root))?.sideNav || [], [isRootActive, navigation])

  const mainNavLengthMinusOne = navigation.length - 1

  return (
    <>
      {navigation.map((item, index) => {
        const active = isRootActive(item.root)
        return (
          <li
            key={`main_mobile_${index}`}
            className={classnames('relative md:hidden text-lg', {
              'mb-4': index === mainNavLengthMinusOne,
              [activeItem]: active
            })}
          >
            {renderNavLink(item, classnames(`${defaultPadding} ${hoverLink}`, { [activeLink]: active }))}
          </li>
        )
      })}
      {selectedSideNav.map((section, sectionIndex) => (
        <li
          key={`section_${sectionIndex}`}
          className={classnames('relative mb-5', {
            'before:absolute before:left-0 before:-bottom-3 before:mx-6 before:h-px before:w-[calc(100%-3rem)] before:bg-stone-300 dark:before:bg-stone-700':
              sectionIndex < selectedSideNav.length - 1
          })}
        >
          <span className={`pt-3 ${defaultPadding} text-sm text-stone-800 dark:text-stone-300 uppercase`}>{section.sectionName}</span>

          <ul>
            {section.items.map((sideNavItem, sideNavIndex) => {
              if (sideNavItem.subItems?.length) {
                return (
                  <SidebarNavigationItemCollapsed
                    key={`side_subitem_${sideNavIndex}`}
                    isRootActive={isRootActive}
                    isHrefActive={isHrefActive}
                    sideNavItem={sideNavItem}
                    renderNavLink={renderNavLink}
                  />
                )
              }

              const active = isHrefActive(sideNavItem.href)

              return (
                <li
                  key={`side_${sideNavIndex}`}
                  className={classnames('relative', {
                    [activeItem]: active
                  })}
                >
                  {renderNavLink(
                    sideNavItem,
                    classnames(`${hoverLink} ${defaultPadding}`, {
                      [activeLink]: active
                    })
                  )}
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </>
  )
}
