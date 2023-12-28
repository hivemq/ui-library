import classnames from 'classnames'
import * as React from 'react'

export type ToolbarLogoProps = {
  logo: string
  href?: string
  hasLogoHr?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

export function ToolbarLogo({ logo, href = '#', hasLogoHr = true, onClick, children }: ToolbarLogoProps) {
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
