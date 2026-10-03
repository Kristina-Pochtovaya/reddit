import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { users } from '../../mock/mocked_user'
import type { User } from '../../types/user'
import { getUsers } from './thunks/user'

type UserState = {
  users: User[]
  currentUser: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  users: users,
  currentUser: null,
  loading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<User>) => {
      console.log('edit')
      return { ...state, data: action.payload }
    },
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    clearCurrentUser: (state) => {
      state.currentUser = null
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload
        state.error = null
        state.loading = false
      },
    )
    builder.addCase(getUsers.rejected, (state) => {
      state.error = 'Failed to load user'
      state.loading = false
    })
  },
})

export const { edit, setCurrentUser, clearCurrentUser } = usersSlice.actions
export const selectUsers = (state: RootState) => state.user.users
export const selectUser = (state: RootState) => state.user.currentUser
export default usersSlice.reducer
