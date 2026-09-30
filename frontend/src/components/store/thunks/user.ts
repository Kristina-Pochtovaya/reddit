import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Credentials } from '../../../types/user'
import api from '../../../axios'
import { setAuthed } from '../auth_slice'

export const loginUser = createAsyncThunk(
  'user',
  async (credentials: Credentials, { dispatch }) => {
    const response = await api.post('/auth/login', {
      ...credentials,
      expiresInMins: 1,
    })

    localStorage.setItem('accessToken', response.data.accessToken)
    localStorage.setItem('refreshToken', response.data.refreshToken)

    dispatch(setAuthed(true))
  },
)

export default api
