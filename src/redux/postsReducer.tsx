import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostType } from '../components/types/Types'
import { posts as initialPosts } from '../../src/data/postData'

const postsReducer = createSlice({
  name: 'posts',
  initialState: initialPosts,
  reducers: {
  }
})

export default postsReducer.reducer
