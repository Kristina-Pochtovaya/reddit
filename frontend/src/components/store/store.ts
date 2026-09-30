import { configureStore } from '@reduxjs/toolkit'
import postReducer from './post_slice'
import authReducer from './auth_slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    post: postReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
