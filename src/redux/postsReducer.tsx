// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { PostType } from '../components/types/Types'
// import { posts as initialPosts } from '../../src/data/postData'

// const postsReducer = createSlice({
//   name: 'posts',
//   initialState: initialPosts,
//   reducers: {
//   }
// })

// export default postsReducer.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPosts } from '../../src/postsActions/PostsActions'
import { PostType } from '../../src/components/types/Types'

interface PostsState {
  items: any
  posts: PostType[]
  query: string
  loading: boolean
  error: string | null
}

const initialState: PostsState = {
  posts: [],
  query: '',
  loading: false,
  error: null,
  items: undefined
}

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  // reducers: {},
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
    },
  extraReducers: (builder) => {
      builder
          .addCase(fetchPosts.pending, (state) => {
              state.loading = true
              state.error = null
          })
          .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostType[]>) => {
              state.loading = false
              console.log('Fetched posts:', action.payload)
              state.posts = Array.isArray(action.payload) ? action.payload : []
          })
          .addCase(fetchPosts.rejected, (state, action) => {
              state.loading = false
              state.error = action.error.message || 'Failed to fetch posts'
          })
  },
})

export const { setQuery } = postsReducer.actions
export default postsReducer.reducer