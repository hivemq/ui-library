import classnames from 'classnames'
import { ChevronDownIcon, ChevronUpIcon, LucideIcon, MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useOverlayState } from '@/hooks/useOverlay'

type LogoProps = {
  logo: string
  href?: string
  hasLogoHr?: boolean
  children?: React.ReactNode
  onClick?: () => void
}
export function Logo({ logo, href = '#', hasLogoHr = true, onClick, children }: LogoProps) {
  return (
    <a
      href={href}
      className={classnames('whitespace-nowrap my-px min-w-[calc(290px-1.5rem)] pr-[54px]', {
        'md:mr-12 md:relative after:hidden md:after:block after:absolute after:h-6 after:w-[2px] after:right-0 after:top-4 after:bg-white/20':
          hasLogoHr
      })}
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
    >
      <img src={logo} className="h-14 w-14 relative -left-2 left inline" />
      <span className="text-white relative top-[2px]">
        <span className="hidden sm:inline">HiveMQ </span>
        <b>{children}</b>
      </span>
    </a>
  )
}

type TopLevelNavigationProps = {
  className?: string
  children?: React.ReactNode
}

export function TopLevelNavigation({ className, children }: TopLevelNavigationProps) {
  return (
    <header
      className={`${className ?? ''} col-span-3 flex flex-row items-center px-0 md:px-6 sticky z-40 w-full top-0 text-xl dark bg-stone-950`}
    >
      {children}
    </header>
  )
}

export function Toolbar({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  )
}

type MainNavigationProps = {
  children?: React.ReactNode
}

export function MainNavigation({ children }: MainNavigationProps) {
  return (
    <div className="hidden md:block">
      <ul className="flex flex-row items-center gap-7 xl:gap-10">{children}</ul>
    </div>
  )
}

type MainNavItemProps = {
  children: React.ReactNode
  isActive?: boolean
}

export function MainNavItem({ children, isActive = false }: MainNavItemProps) {
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

type PageLevelNavigationProps = {
  isOpenMenu: boolean
  pageNeedsFullscreen?: boolean
  children?: React.ReactNode
}

export function PageLevelNavigation({ children, isOpenMenu, pageNeedsFullscreen }: PageLevelNavigationProps) {
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

export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-[290px_1fr_200px] grid-rows-[auto_1fr_auto] h-screen">{children}</div>
}

export function Content({ children, overflowX }: { children: React.ReactNode; overflowX?: boolean }) {
  return <div className={classnames('md:col-span-2 col-span-3', { 'overflow-x-scroll': overflowX })}>{children}</div>
}

export function Overlay({ onClick }: { onClick: () => void }) {
  return <div className="fixed w-full h-full z-10 panel-overlay bg-overlay/50" onClick={onClick}></div>
}

export function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  // default width `min-w-fit py-2`
  return (
    <div
      className={
        className +
        ' absolute top-[58px] right-0 text-base min-w-96 text-white bg-stone-950 border-[2px] border-r-0 border-white/20 max-h-[90vh] overflow-y-scroll shadow-lg'
      }
    >
      {children}
    </div>
  )
}

export function SideNavMenuToolbarButton() {
  const [isOpenSideNav, setOpenSideNav] = useState<boolean>(false)

  return (
    <Toolbar className="mr-2 block md:hidden">
      <ToolbarButtonIcon isOpen={isOpenSideNav} setOpen={setOpenSideNav} overlayId="side_nav_menu">
        {isOpenSideNav ? <XIcon /> : <MenuIcon />}
      </ToolbarButtonIcon>
    </Toolbar>
  )
}

export function ToolbarButtonIcon({
  children,
  href,
  overlayId: id,
  setOpen,
  isOpen,
  onClick
}: {
  href?: string
  children?: React.ReactNode
  overlayId?: string
  isOpen?: boolean
  setOpen?: (val: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}) {
  const { setCurrentOverlayId, currentOverlayId } = useOverlayState()
  useEffect(() => {
    if (id !== currentOverlayId && setOpen) {
      setOpen(false)
    }
  }, [currentOverlayId, setOpen, id])
  return (
    <a
      href={href || '#'}
      className={classnames('cursor-pointer p-[1.07rem] outline outline-2 hover:bg-stone-700 transition-outline_bg text-white', {
        'outline-transparent -outline-offset-4': !isOpen,
        'bg-stone-700 -outline-offset-8 outline-white': isOpen
      })}
      onClick={
        onClick ||
        ((e) => {
          e.preventDefault()
          setCurrentOverlayId(isOpen ? undefined : id)
          setOpen && setOpen(!isOpen)
        })
      }
    >
      {children}
    </a>
  )
}

export function Hr() {
  return <hr className="my-2 border-white/20" />
}

export function PanelHeadline({ children }: { children: React.ReactNode }) {
  return <h4 className="py-2 font-display text-2xl font-semibold">{children}</h4>
}

export function LinkList({ name, list }: { name: string; list: string[] }) {
  return (
    <div className="">
      <PanelHeadline>{name}</PanelHeadline>
      <ul className="mb-0">
        {list.map((e) => (
          <li key={e}>
            <a
              href="#"
              className="relative block px-0 py-1 underline-offset-8 text-primary before:block before:absolute before:w-[6px] before:h-[6px] before:-left-4 before:top-3 before:mr-2 hover:underline hover:before:bg-primary"
            >
              <span className="text-white">{e}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AppIcon({ title, icon }: { icon: string; title: string }) {
  return (
    <a
      href="#"
      className="relative text-center w-[110px] p-2 border-gray-700 bg-stone-800 hover:bg-primary hover:text-stone-950 outline outline-2 outline-transparent -outline-offset-2 transition-all hover:outline-white hover:outline-offset-0 after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-transparent hover:after:border-r-white after:border-solid after:border-t-0 after:border-l-0 after:border-b-[18px] after:border-r-[18px] after:transition-all"
    >
      <div>
        <img src={icon} className="w-[70%] h-[70%] block m-auto" />
      </div>
      <p className="text-center font-bold uppercase text-md leading-5">{title}</p>
    </a>
  )
}

export function AppIconList({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-3 flex-wrap w-full">{children}</div>
}

const hoverLink = 'hover:bg-stone-200/50 hover:text-stone-950 dark:hover:bg-stone-800/60 dark:hover:text-white transition-color_bg'
const defaultPadding = 'block py-[.4rem] px-6'
const activeItem = 'after:h-full after:w-[7px] after:absolute after:top-0 after:left-0 after:z-10 after:bg-primary'
const activeLink = 'bg-stone-200 text-stone-950 dark:bg-stone-800 dark:text-white font-medium'

type RenderNavLinkCallback = (sideNavItem: SideNavItemBase, className: string) => React.ReactNode

export type SideNavItemBase = {
  name: string
  href: string
}

type SideNavSubItem = SideNavItemBase

type SideNavItem = SideNavItemBase & {
  subItems?: SideNavSubItem[]
  root?: string
  forceOpen?: boolean
}

type NavigationItem = SideNavItemBase & {
  root: string
  sideNav?: {
    sectionName?: string
    items: SideNavItem[]
  }[]
}

export type MainNavigation = NavigationItem[]

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
                  <NavListItemCollapsed
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

type NavListItemCollapsedProps = {
  isHrefActive: (href: string) => boolean
  isRootActive: (root: string) => boolean
  sideNavItem: SideNavItem
  renderNavLink: RenderNavLinkCallback
}

function NavListItemCollapsed({ isHrefActive, isRootActive, sideNavItem, renderNavLink }: NavListItemCollapsedProps) {
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
        onClick={(e) => {
          e.preventDefault()
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

type ToolbarPanelProps = {
  children: React.ReactNode
  contextName?: string
  overlayId: string
  Icon: LucideIcon
}
export function ToolbarPanel({ contextName, children, overlayId, Icon }: ToolbarPanelProps) {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <>
      <ToolbarButtonIcon isOpen={isOpen} setOpen={setOpen} overlayId={overlayId}>
        {contextName}
        {isOpen ? <XIcon /> : <Icon />}
      </ToolbarButtonIcon>
      {isOpen && children}
    </>
  )
}

type Indicator = 'success' | 'warning' | 'error' | 'info' | undefined
type HeaderStatusProps = {
  children: React.ReactNode
  title: string
  indicator?: Indicator
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
export function HeaderStatus({ children, title, indicator, href, onClick }: HeaderStatusProps) {
  return (
    <a
      href={href || '#'}
      onClick={onClick}
      className={classnames('relative text-sm', {
        'mr-8': !indicator,
        'mr-12': Boolean(indicator)
      })}
    >
      <div className="text-xs font-semibold text-white/75 uppercase">{title}</div>
      <div className="font-monospace leading-6 text-white text-lg underline-offset-4">
        {children}
        {indicator && (
          <span
            className={`absolute bottom-[4px] -right-5 w-[.7em] h-[.7em] rounded-3xl inline-block ${chooseIndicatorColors(indicator)}`}
          ></span>
        )}
      </div>
    </a>
  )
}

function chooseIndicatorColors(indicator: Indicator) {
  switch (indicator) {
    case 'success':
      return 'bg-emerald-600'
    case 'warning':
      return 'bg-yellow-600'
    case 'error':
      return 'bg-red-600'
    case 'info':
      return 'bg-blue-600'
    default:
      return 'bg-gray-600'
  }
}
export function HeaderSearch({ placeholder }: { placeholder: string }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const shortcut = useMemo(() => {
    const os = window.navigator.platform
    if (os.startsWith('Mac')) {
      return '⌘K'
    }
    return '^K'
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="relative flex items-center mr-8">
      <label htmlFor="main-search">
        <SearchIcon className="text-white" />
      </label>
      <input
        ref={inputRef}
        type="search"
        id="main-search"
        placeholder={placeholder}
        className="text-xl text-white appearance-none min-w-[4rem] px-3 placeholder-text-muted-foreground bg-transparent border-none outline-none"
      />
      <div className="absolute top-1 right-0 px-1 text-sm text-stone-400 border border-stone-400">{shortcut}</div>
    </div>
  )
}

type HeaderDropdownProps = {
  id: string
  values: Array<[string, string]>
  selected?: [string, string]
  className?: string
  children?: React.ReactNode
  ExtraIcon?: LucideIcon
}
export function HeaderDropdown({ selected, values, className, ExtraIcon, id }: HeaderDropdownProps) {
  return (
    <div className="relative flex items-center mr-8">
      {ExtraIcon && <ExtraIcon className="text-white" />}
      <select id={id} className={className + ' appearance-none text-white bg-transparent border-0 outline-0 min-w-[6rem]'}>
        {values.map((value) => (
          <option selected={selected?.[0] === value[0]} key={value[0]} value={value[0]}>
            {value[1]}
          </option>
        ))}
      </select>
      <label htmlFor={id}>
        <ChevronDownIcon className="text-white" />
      </label>
    </div>
  )
}

type SidebarNavigationScopeProps = {
  title: string
  selected?: [string, string]
  values: Array<[string, string]>
}
export function SidebarNavigationScope({ title, values, selected }: SidebarNavigationScopeProps) {
  return (
    <div className={`${defaultPadding} bg-stone-800`}>
      <small className="uppercase text-muted">{title}</small>
      <div className="select-chevron select-chevron--gray">
        <select className={'appearance-none text-white bg-transparent border-0 outline-0 min-w-[6rem]'}>
          {values.map((value) => (
            <option selected={selected?.[0] === value[0]} key={value[0]} value={value[0]}>
              {value[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
