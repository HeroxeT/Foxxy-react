import { configureStore } from '@reduxjs/toolkit'
import WindowReducer from 'Store/Slices/Window'
import UserReducer from 'Store/Slices/User'


const store = configureStore({
    reducer: {
        window: WindowReducer,
        user: UserReducer,
    },
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch