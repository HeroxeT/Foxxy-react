import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import MainPanelRoutes from 'Components/Content/NavItems'

interface WindowState {
    isWindowLoaded: boolean
    contentWindowIndex: number
    contentWindowName: string
}

const initialState: WindowState = {
    isWindowLoaded: false,
    contentWindowIndex: 1,
    contentWindowName: 'chats',
}

const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        changeWindowLoaded(state, action: PayloadAction<boolean>) {
            state.isWindowLoaded = action.payload
        },
        changeContentWindow(state, action: PayloadAction<number>) {
            const windowName = MainPanelRoutes[action.payload].id

            state.contentWindowIndex = action.payload
            state.contentWindowName = windowName
        },
    },
})

export const { changeWindowLoaded, changeContentWindow } = windowSlice.actions

export default windowSlice.reducer
