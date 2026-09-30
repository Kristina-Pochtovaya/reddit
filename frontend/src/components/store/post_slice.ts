import { createSlice } from '@reduxjs/toolkit'
import type { Post } from '../../types/post'
import type { RootState } from './store'
import { posts } from '../../mock/mocked_post'
import { getPosts } from './thunks/posts'

type PostsState = {
  data: Post[]
  loading: boolean
  error: string | null
}

const initialState: PostsState = {
  data: posts,
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
  },
  extraReducers(builder) {
    builder.addCase(getPosts.pending, (state) => {
      state.error = null
      state.loading = true
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload
      state.error = null
      state.loading = false
    })
    builder.addCase(getPosts.rejected, (state) => {
      state.error = 'Failed to load posts'
      state.loading = false
    })
  },
})

export const { add, remove, edit } = postsSlice.actions
export const selectPosts = (state: RootState) => state.post.data
export default postsSlice.reducer
