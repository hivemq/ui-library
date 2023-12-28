import * as React from 'react'

export type HeaderAppIconProps = {
  icon: string
  title: string
}

export function HeaderAppIcon({ title, icon }: HeaderAppIconProps) {
  return (
    <a
      href="#"
      className="relative text-center w-[110px] p-2 border-gray-700 bg-stone-800 hover:bg-primary hover:text-stone-950 outline outline-2 outline-transparent -outline-offset-2 transition-all hover:outline-white hover:outline-offset-0 after:absolute after:top-0 after:right-0 after:w-0 after:h-0 after:border-transparent hover:after:border-r-white after:border-solid after:border-t-0 after:border-l-0 after:border-b-[18px] after:border-r-[18px] after:transition-all"
    >
      <div>
        <img src={icon} className="w-[70%] h-[70%] block m-auto" />
      </div>
      <p className="text-center font-bold uppercase text-md leading-5">{title}</p>
    </a>
  )
}
