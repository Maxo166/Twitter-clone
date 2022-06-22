import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='flex cursor-pointer space-x-2 bg-gray-100 p-3'>
          <SearchIcon className='h-5 w-5 text-gray-400' />
          <input type="text" className='flex-1 bg-transparent outline-none' placeholder='Search Twitter' />
    </div>
  )
}

export default SearchBox
