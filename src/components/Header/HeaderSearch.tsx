import { SearchIcon } from 'lucide-react'
import * as React from 'react'
import { useEffect, useMemo, useRef } from 'react'

export type HeaderSearchProps = {
  placeholder: string
}

export function HeaderSearch({ placeholder }: HeaderSearchProps) {
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
