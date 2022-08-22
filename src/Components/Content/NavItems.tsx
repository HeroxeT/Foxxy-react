// import { ComponentType } from 'react'
import user from 'Common/Images/menuIcons/user.png'
import chat from 'Common/Images/menuIcons/chat.png'
import friends from 'Common/Images/menuIcons/friends.png'
import settings from 'Common/Images/menuIcons/settings.png'
import userL from 'Common/Images/menuIcons/user_l.png'
import chatL from 'Common/Images/menuIcons/chat_l.png'
import friendsL from 'Common/Images/menuIcons/friends_l.png'
import settingsL from 'Common/Images/menuIcons/settings_l.png'

interface MainPanelRoute {
    link: string
    id: string
    image: string
    imageLight: string
    customStyles?: string
    // component: ComponentType<any>
}

export const MainPanelRoutes: Array<MainPanelRoute> = [
    {
        link: 'user',
        id: 'user',
        image: user,
        imageLight: userL,
    },
    {
        link: 'chats',
        id: 'chats',
        image: chat,
        imageLight: chatL,
    },
    {
        link: 'friends',
        id: 'friends',
        image: friends,
        imageLight: friendsL,
    },
    {
        link: 'settings',
        id: 'settings',
        image: settings,
        customStyles: 'ended',
        imageLight: settingsL,
    },
]