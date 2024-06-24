import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LikesState = {
  [postId: string]: {
    likes: number
    dislikes: number
  }
}

const initialState: LikesState = {}

const likesReducer = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      if (!state[postId]) {
        state[postId] = { likes: 0, dislikes: 0 }
      }
      state[postId].likes += 1
    },
    dislikePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      if (!state[postId]) {
        state[postId] = { likes: 0, dislikes: 0 }
      }
      state[postId].dislikes += 1
    },
    setLikes: (state, action: PayloadAction<LikesState>) => {
      return action.payload
    }
  }
})

export const { likePost, dislikePost, setLikes } = likesReducer.actions
export default likesReducer.reducer
