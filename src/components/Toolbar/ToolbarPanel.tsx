import { LucideIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { ToolbarButtonIcon } from './ToolbarButtonIcon'

export type ToolbarPanelProps = {
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
