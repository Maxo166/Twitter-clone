import React from 'react';
import {
    HomeIcon,
    HashtagIcon,
    CollectionIcon,
    BookmarkIcon,
    BellIcon,
    MailIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';


export const Sidebar = () => {
  return (
        <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
            <img src="https://links.papareact.com/drq" className='h-10 m-3 w-10 my-3 mx-4' />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={MailIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={CollectionIcon} title="Lists" />
            <SidebarRow Icon={UserIcon} title="Sign In" />
            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    )
}
