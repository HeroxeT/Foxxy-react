import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'Store/Store'
import ChatItem from 'Components/Windows/Chats/LeftChatPanel/Items'
import { changeDialog, getDialogs } from 'Store/Slices/User'

import { LoaderItem } from 'Components/Widgets/Loader'

function LeftChatPanel() {
    require('./index.styl')
    const { dialogs, isDialogsLoaded } = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        setTimeout(() => {
            const chatToken = location.pathname.split('/')[3]
            dispatch(changeDialog(chatToken || ''))
            dispatch(getDialogs())
        }, 1500)
    }, [])
    return (
        <>
            {
                isDialogsLoaded ? (
                        <ul className='messageDialogs-list'>
                            {dialogs.map((dialog) =>
                                (
                                    <ChatItem chatToken={dialog.chatToken} name={dialog.name}
                                              status={dialog.status || ''} img={dialog.img} key={dialog.chatToken} />
                                ),
                            )}
                        </ul>
                    ) :
                    (
                        <LoaderItem width={150} />
                    )
            }
        </>
    )
}

export default LeftChatPanel
