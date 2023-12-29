import { MenuIcon, XIcon } from 'lucide-react'
import React from 'react'

import { NavigationContext } from '../../context/NavigationContext'

import { HeaderButtonIcon } from './HeaderButtonIcon'

export function HeaderSidebarNavigationToggle() {
  const context = React.useContext(NavigationContext)

  return (
    <div className="mr-2 block md:hidden">
      <div className="flex gap-2 items-center">
        <HeaderButtonIcon isOpen={context.isSidebarOpen} setOpen={context.setSidebarOpen} overlayId="side_nav_menu">
          {context.isSidebarOpen ? <XIcon /> : <MenuIcon />}
        </HeaderButtonIcon>
      </div>
    </div>
  )
}
