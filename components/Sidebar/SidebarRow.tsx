import { title } from 'process'
import React, { SVGProps } from 'react'


interface Props{
    Icon: (props:SVGProps<SVGSVGElement>) => JSX.Element,
    title:string
}


const SidebarRow = ({Icon, title}: Props) => {
  return (
      <div className='group flex items-center max-w-fit cursor-pointer space-x-2
                        px-4 py-3 rounded-full hover:bg-gray-100
                        transition-all duration-200 '>
        <Icon className='h-6 w-6'/>
        <p className='group-hover:text-twitter text-base font-light lg:text-xl hidden md:inline-flex'>{title}</p>
    </div>
  )
}

export default SidebarRow
