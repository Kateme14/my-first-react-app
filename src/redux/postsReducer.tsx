import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPostById, fetchPosts } from '../../src/postsActions/PostsActions'
import { PostType } from '../../src/components/types/Types'

interface PostsState {
  items: any
  posts: PostType[]
  query: string
  loading: boolean
  error: string | null
  selectedPost: PostType | null
}

const initialState: PostsState = {
  posts: [],
  query: '',
  loading: false,
  error: null,
  items: undefined,
  selectedPost: null
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
          .addCase(fetchPostById.pending, (state) => {
            state.loading = true
            state.error = null
          })
          .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<PostType>) => {
            state.loading = false
            console.log('Fetched post:', action.payload)
            state.selectedPost = action.payload
          })
          .addCase(fetchPostById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Failed to fetch post'
          })
      },
    })
          

export const { setQuery } = postsReducer.actions
export default postsReducer.reducer