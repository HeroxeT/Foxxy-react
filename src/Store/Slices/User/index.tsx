import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    isAuth: boolean
    userToken: string
}

const initialState: UserState = {
    isAuth: false,
    userToken: '',
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
    },
})

export const { authentication } = userSlice.actions

export default userSlice.reducer
