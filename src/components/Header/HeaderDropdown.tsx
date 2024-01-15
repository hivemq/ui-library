import { ChevronDownIcon, LucideIcon } from 'lucide-react'
import * as React from 'react'

type KeyValuePair = [key: string, value: string]

export type HeaderDropdownProps = {
  id: string
  values: KeyValuePair[]
  selected?: KeyValuePair
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
