import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChatObject } from 'Components/Windows/Chats/LeftChatPanel/Items'

interface UserState {
    isAuth: boolean
    userToken: string
    isDialogsLoaded: boolean
    dialogs: Array<ChatObject>
    activeDialog: string
}

const initialState: UserState = {
    isAuth: true,
    userToken: '',
    isDialogsLoaded: false,
    dialogs: [],
    activeDialog: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authentication(state) {
            const userToken = '123'

            state.isAuth = !!userToken.length
            state.userToken = userToken
        },
        getDialogs(state) {
            state.dialogs = [
                {
                    name: 'qwe',
                    chatToken: '3204ertc93444ffg',
                    img: {
                        url: 'https://koteiki.com/wp-content/uploads/2017/12/cat-3-53.jpg',
                    },
                    status: 'Ура тесты',
                },
                {
                    name: 'qwe',
                    img: {
                        url: 'https://koteiki.com/wp-content/uploads/2017/12/cat-3-53.jpg',
                    },
                    chatToken: '3204ertdswc93444ffg',
                },
            ]
            state.isDialogsLoaded = true
        },
        changeDialog(state, action: PayloadAction<string>) {
            state.activeDialog = action.payload
        },
    },
})

export const { authentication, getDialogs, changeDialog } = userSlice.actions

export default userSlice.reducer
