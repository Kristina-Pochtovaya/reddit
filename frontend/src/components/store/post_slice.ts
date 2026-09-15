import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Post } from '../../types/post'
import type { RootState } from './store'
import { posts } from '../../mock/mocked_post'

type PostsState = {
  data: Post[]
  search: string
  loading: boolean
  error: string | null
}

const initialState: PostsState = {
  data: posts,
  search: '',
  loading: false,
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add: (state) => console.log('add', state),
    remove: () => console.log('remove'),
    edit: (state, action) => {
      console.log('edit')
      return { ...state, data: action.payload }
    },
    search: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { add, remove, edit, search } = postsSlice.actions
export const selectPosts = (state: RootState) => state.post.data
export const getSearchString = (state: RootState) => state.post.search
export default postsSlice.reducer
