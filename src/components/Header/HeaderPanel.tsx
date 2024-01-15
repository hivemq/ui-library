import { LucideIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { HeaderButtonIcon } from './HeaderButtonIcon'

export type HeaderPanelProps = {
  children: React.ReactNode
  contextName?: string
  overlayId: string
  Icon: LucideIcon
}

export function HeaderPanel({ contextName, children, overlayId, Icon }: HeaderPanelProps) {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <HeaderButtonIcon isOpen={isOpen} setOpen={setOpen} overlayId={overlayId}>
        {contextName}
        {isOpen ? <XIcon /> : <Icon />}
      </HeaderButtonIcon>
      {isOpen && children}
    </>
  )
}
