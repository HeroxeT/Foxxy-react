import React, { useEffect } from 'react'
import LeftChatPanel from 'Components/Windows/Chats/LeftChatPanel'
import { useSelector } from 'react-redux'
import { AppState } from 'Store/Store'
import { useNavigate } from 'react-router-dom'

function ChatsPanel() {
    const { activeDialog } = useSelector((state: AppState) => state.user)
    const navigate = useNavigate()
    require('./index.styl')

    useEffect(() => {
        if (activeDialog) {
            navigate(`${location.pathname}/${activeDialog}`)
        }
    }, [])

    return (
        <section className='chatPanel'>
            <div className='chatPanel-main'>
                <div className='chatPanel-left'>
                    <LeftChatPanel />
                </div>
                <div className='chatPanel-right'>

                </div>
            </div>
        </section>
    )
}

export default ChatsPanel