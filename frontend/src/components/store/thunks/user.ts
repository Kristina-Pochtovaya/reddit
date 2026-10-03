import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Credentials } from '../../../types/auth'
import api from '../../../axios'
import { setAuthed } from '../auth_slice'
import { users as mockedUsers } from '../../../mock/mocked_user'
import { setCurrentUser } from '../user_slice'

export const loginUser = createAsyncThunk(
  'user',
  async (credentials: Credentials, { dispatch }) => {
    const response = await api.post('/auth/login', {
      ...credentials,
      expiresInMins: 1,
    })

    localStorage.setItem('accessToken', response.data.accessToken)
    localStorage.setItem('refreshToken', response.data.refreshToken)

    const currentUser = mockedUsers.find(
      (user) => response.data.username === user.name,
    )
    if (!currentUser) {
      throw new Error('User not found')
    }

    dispatch(setCurrentUser(currentUser))
    dispatch(setAuthed(true))
    return response.data
  },
)

export const getUsers = createAsyncThunk('users', async () => {
  return mockedUsers
})

export default api
