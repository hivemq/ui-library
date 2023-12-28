import classnames from 'classnames'
import * as React from 'react'

type ToolbarIndicatorVariant = 'success' | 'warning' | 'error' | 'info' | undefined

export type ToolbarStatusProps = {
  children: React.ReactNode
  title: string
  indicatorVariant?: ToolbarIndicatorVariant
  href?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export function ToolbarStatus({ children, title, indicatorVariant, href, onClick }: ToolbarStatusProps) {
  return (
    <a
      href={href || '#'}
      onClick={onClick}
      className={classnames('relative text-sm', {
        'mr-8': !indicatorVariant,
        'mr-12': Boolean(indicatorVariant)
      })}
    >
      <div className="text-xs font-semibold text-white/75 uppercase">{title}</div>
      <div className="font-monospace leading-6 text-white text-lg underline-offset-4">
        {children}

        {indicatorVariant && (
          <span
            className={`absolute bottom-[4px] -right-5 w-[.7em] h-[.7em] rounded-3xl inline-block ${getIndicatorVariantClassName(
              indicatorVariant
            )}`}
          />
        )}
      </div>
    </a>
  )
}

function getIndicatorVariantClassName(indicatorVariant: ToolbarIndicatorVariant) {
  switch (indicatorVariant) {
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
