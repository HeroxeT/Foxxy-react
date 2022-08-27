import React, { useState } from 'react'
import { LoaderItem } from 'Components/Widgets/Loader'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'Store/Store'
import { changeDialog } from 'Store/Slices/User'


interface ChatInfo {
    chatToken: string
    name: string
    img: {
        url: string
    }
    status?: string
}


function ChatItem(config: ChatObject) {
    const [loader, changeLoader] = useState(<LoaderItem width={20} />)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { activeDialog } = useSelector((state: AppState) => state.user)

    const loadIcon = () => {
        changeLoader(null)
    }

    const SelectChat = () => {
        dispatch(changeDialog(config.chatToken))
        navigate(config.chatToken)
    }

    return (
        <>
            <li className={`messageDialogs-item${activeDialog === config.chatToken ? ' active' : ''}`}
                id={config.chatToken} onClick={SelectChat}>
                <div className='avatar-50 darkA'>
                    <img alt='icon' src={config.img.url} height='50' onLoad={loadIcon} />
                    {loader}

                </div>
                <div className='Person'>
                    <div className='PersonName'>{config.name}</div>
                    <div className='PersonStatus'>{config?.status}</div>
                </div>
            </li>
            <li className='messageDialogs-item-line'></li>
        </>
    )
}


export type ChatObject = ChatInfo
export default ChatItem