import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Params } from '../../../types/post'
import api from '../../../axios'
import { posts as mockedPosts } from '../../../mock/mocked_post'

const DEFAULT_POSTS_LIMIT = 20

export const getPosts = createAsyncThunk('posts', async (params: Params) => {
  // *TO-DO uncomment when backend will be implemented
  // const response = await api.get(`/posts`, {
  //   params: {
  //     search: params.search,
  //     limit: params?.limit ?? DEFAULT_POSTS_LIMIT,
  //   },
  // })
  // return response.data

  return mockedPosts.filter(
    (post) =>
      post.author.name.toLowerCase().includes(params.search) ||
      post.content.data.toLowerCase().includes(params.search) ||
      post.title.toLowerCase().includes(params.search),
  )
})

export default api
