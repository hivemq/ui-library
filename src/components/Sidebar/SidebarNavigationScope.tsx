import * as React from 'react'

import { defaultPadding } from '../../utils/classNames'

export type SidebarNavigationScopeProps = {
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
