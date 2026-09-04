import { createSlice } from '@reduxjs/toolkit'
import type { Post } from '../../types/post'
import type { RootState } from './store'

const initialState: Post = {
  authorName: '',
  createdAt: new Date().toLocaleString(),
  editedAt: null,
  title: '',
  content: {
    type: 'text',
    text: '',
  },
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    add: (state) => console.log('add', state),
    remove: () => console.log('remove'),
    edit: (state, action) => {
      console.log('edit')
      return { ...state, data: action.payload }
    },
    search: (state) => console.log('search', state),
  },
})

export const { add, remove, edit, search } = postSlice.actions
export const selectPost = (state: RootState) => state.post
export default postSlice.reducer
