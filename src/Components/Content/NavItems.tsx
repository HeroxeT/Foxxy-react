import { ComponentType } from 'react'
import user from 'Common/Images/menuIcons/user.png'
import chat from 'Common/Images/menuIcons/chat.png'
import friends from 'Common/Images/menuIcons/friends.png'
import settings from 'Common/Images/menuIcons/settings.png'
import userL from 'Common/Images/menuIcons/user_l.png'
import chatL from 'Common/Images/menuIcons/chat_l.png'
import friendsL from 'Common/Images/menuIcons/friends_l.png'
import settingsL from 'Common/Images/menuIcons/settings_l.png'


import UserPanel from 'Components/Windows/User'
import ChatsPanel from 'Components/Windows/Chats'
import FriendsPanel from 'Components/Windows/Friends'
import SettingsPanel from 'Components/Windows/Settings'


interface MainPanelRoute {
    link: string
    url: string
    id: string
    image: string
    imageLight: string
    customStyles?: string
    component: ComponentType<any>
}

const MainPanelRoutes: Array<MainPanelRoute> = [
    {
        link: 'user/*',
        id: 'user',
        url: 'user',
        image: user,
        imageLight: userL,
        component: UserPanel,
    },
    {
        link: 'chats/*',
        id: 'chats',
        url: 'chats',
        image: chat,
        imageLight: chatL,
        component: ChatsPanel,
    },
    {
        link: 'friends/*',
        id: 'friends',
        url: 'friends',
        image: friends,
        imageLight: friendsL,
        component: FriendsPanel,
    },
    {
        link: 'settings/*',
        id: 'settings',
        url: 'settings',
        image: settings,
        customStyles: 'ended',
        imageLight: settingsL,
        component: SettingsPanel,
    },
]

export default MainPanelRoutes