import { configureStore } from '@reduxjs/toolkit'
import WindowReducer from 'Store/Reducers/Window'


const store = configureStore({
    reducer: {
        window: WindowReducer,
    },
});

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch