import React from 'react'
import { Tweet } from '../../Typings'
import TimeAgo from 'react-timeago';
import { ChatAlt2Icon, HeartIcon, SwitchHorizontalIcon, UploadIcon } from '@heroicons/react/outline';


interface Props{
  tweet: Tweet
}
const Tweet = ({tweet}: Props) => {
  return (
    <div className='flex flex-col space-x-3 border-y border-gray-100 p-5'>
      <div className='flex space-x-3'>
        <img className='w-10 h-10 rounded-full object-cover' src={tweet.profileImage} alt="" />

        <div>
          <div className='flex items-center space-x-1'>
              <p>{tweet.username}</p>
              <a href="" className='hidden text-sm text-gray-500 md:inline'>
                @{tweet.username.replace(/\s+/g, ''.toLowerCase())} . </a> 
             
            <TimeAgo date={tweet._createdAt} className="text-sm text-gray-500"/>
          </div>
          <p className='p-1'>{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm' />
          )}
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 h-6 w-6'><ChatAlt2Icon /></div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 h-6 w-6'><SwitchHorizontalIcon /> </div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 h-6 w-6'><HeartIcon /></div>
        <div className='flex cursor-pointer items-center text-gray-400 space-x-3 h-6 w-6'><UploadIcon /></div>
      </div>
    </div>
  )
}

export default Tweet
