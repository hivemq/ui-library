import classnames from 'classnames'
import * as React from 'react'
import { useEffect } from 'react'

import { useOverlayState } from '@/hooks/useOverlay'

export type HeaderButtonIconProps = {
  href?: string
  children?: React.ReactNode
  overlayId?: string
  isOpen?: boolean
  setOpen?: (val: boolean) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export function HeaderButtonIcon({ children, href, overlayId: id, setOpen, isOpen, onClick }: HeaderButtonIconProps) {
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
