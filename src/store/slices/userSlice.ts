import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const TOKEN = 'token'

interface UserState {
    token: string
}

const initialState: UserState = {
    token: localStorage.getItem(TOKEN) ?? ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken(state, action: PayloadAction<string>) {
            state.token = action.payload
            localStorage.setItem(TOKEN, state.token)
        },
        removeToken(state, action: PayloadAction<string>) {
            state.token = ''
            localStorage.removeItem(TOKEN)
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer