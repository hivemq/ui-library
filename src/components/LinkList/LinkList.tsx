import * as React from 'react'

import { PanelHeadline } from '../Panel/PanelHeadline'

export type LinkListProps = {
  name: string
  list: string[]
}

/**
 * @deprecated - seems like this component is not used anywhere
 * @returns
 */
export function LinkList({ name, list }: LinkListProps) {
  return (
    <div className="">
      <PanelHeadline>{name}</PanelHeadline>
      <ul className="mb-0">
        {list.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="relative block px-0 py-1 underline-offset-8 text-primary before:block before:absolute before:w-[6px] before:h-[6px] before:-left-4 before:top-3 before:mr-2 hover:underline hover:before:bg-primary"
            >
              <span className="text-white">{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
