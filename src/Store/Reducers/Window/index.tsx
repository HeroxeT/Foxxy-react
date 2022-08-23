import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WindowState {
    isWindowLoaded: boolean
}

const initialState: WindowState = {
    isWindowLoaded: false
}

export const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        changeWindowLoaded: (state,action:PayloadAction<boolean>) => {
            state.isWindowLoaded = action.payload
        },
    },
})

export const { changeWindowLoaded } = windowSlice.actions

export default windowSlice.reducer
