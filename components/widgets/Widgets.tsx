import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import SearchBox from './Search-Box'

const Widgets = () => {
    return (
        <div className='col-span-2 mt-2 px-2 hidden lg:inline'>
            <SearchBox />
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sall_hassan"
                options={{height: 1000}}
                />
        </div>
    )
}

export default Widgets