import React, { useState } from 'react'
import {
    SearchCircleIcon,
    EmojiHappyIcon,
    CalendarIcon,
    LocationMarkerIcon,
    PhotographIcon
    
} from '@heroicons/react/outline';


const TweetBox = () => {
    const [input, setInput] = useState<string>('')
  return (
        <div className='flex space-x-2 p-5'>
            <img className='w-14 h-14 object-cover rounded-full mt-4' src="https://links.papareact.com/gll" alt="" /> 
            <div className='flex flex-1 items-center'>
                <form action="" className='flex flex-1 flex-col'>
                  <input type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="what's going on your mind ?! "
                      className='h-24 w-full outline-none text-xl placeholder:text-xl' />
                  
                    <div className='flex items-center'>
                        <div className='flex flex-1 space-x-2 text-twitter'>
                          <PhotographIcon                                
                                className='h-5 w-5 cursor-pointer 
                                transition-transfrom duration-150 ease-out 
                                hover:scale-125' />
                         
                            <SearchCircleIcon className='h-5 w-5' />
                            <EmojiHappyIcon className='h-5 w-5' />
                            <CalendarIcon className='h-5 w-5' />
                            <LocationMarkerIcon className='h-5 w-5'/>
                        </div>
                        <button
                            disabled={!input}
                            className='bg-twitter px-5 py-2 text-white font-bold rounded-full
                            disabled:opacity-40'>tweet</button>
                    </div>
                </form>
            </div>   
        </div>
    )
}

export default TweetBox