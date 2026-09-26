import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type Auth = {
  login: boolean
  authed: boolean
}

type AuthState = {
  data: Auth
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  data: {
    login: false,
    authed: false,
  },
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthed: (state, action: PayloadAction<boolean>) => {
      state.data.authed = action.payload
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.data.login = action.payload
    },
  },
})

export const { setAuthed, setLogin } = authSlice.actions
export const selectAuthed = (state: RootState) => state.auth.data.authed
export const selectLogin = (state: RootState) => state.auth.data.login
export default authSlice.reducer
