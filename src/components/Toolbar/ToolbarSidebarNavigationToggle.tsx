import { MenuIcon, XIcon } from 'lucide-react'
import * as React from 'react'
import { useState } from 'react'

import { ToolbarButtonIcon } from './ToolbarButtonIcon'

export function ToolbarSidebarNavigationToggle() {
  const [isOpenSideNav, setOpenSideNav] = useState<boolean>(false)

  return (
    <div className="mr-2 block md:hidden">
      <div className="flex gap-2 items-center">
        <ToolbarButtonIcon isOpen={isOpenSideNav} setOpen={setOpenSideNav} overlayId="side_nav_menu">
          {isOpenSideNav ? <XIcon /> : <MenuIcon />}
        </ToolbarButtonIcon>
      </div>
    </div>
  )
}
