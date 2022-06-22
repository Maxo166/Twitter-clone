import React from 'react'
import { RefreshIcon } from '@heroicons/react/outline'
const Feed = () => {
    return (
        <div className='col-span-7 lg:col-span-5'>
            <div className="flex justify-between items-center ">
                <h1 className='p-6 pb-0 font-bold'>Home</h1>
                <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter 
                    mr-5 mt-5 transition-all duration-500 ease-out
                    hover:rotate-180 active:scale-125'/>
            </div>
        </div>
    )
}

export default Feed
