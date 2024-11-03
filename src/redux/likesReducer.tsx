import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

type LikesState = {
  [postId: string]: {
    likes: number
    dislikes: number
    status: 'liked' | 'disliked' | 'neutral'
  }
}


const loadLikesFromLocalStorage = (): LikesState => {
  const storedLikes = localStorage.getItem('likes')
  return storedLikes ? JSON.parse(storedLikes) : {}
}


const initialState: LikesState = loadLikesFromLocalStorage()


const likesSlice: Slice<LikesState> = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      if (!state[postId]) {
        state[postId] = { likes: 0, dislikes: 0, status: 'neutral' }
      }

      if (state[postId].status === 'liked') {

        state[postId].likes = Math.max(0, state[postId].likes - 1)
        state[postId].status = 'neutral'
      } else {

        state[postId].likes += 1
        if (state[postId].status === 'disliked') {
          state[postId].dislikes = Math.max(0, state[postId].dislikes - 1)
        }
        state[postId].status = 'liked'
      }

      localStorage.setItem('likes', JSON.stringify(state))
    },
    dislikePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      if (!state[postId]) {
        state[postId] = { likes: 0, dislikes: 0, status: 'neutral' }
      }

      if (state[postId].status === 'disliked') {

        state[postId].dislikes = Math.max(0, state[postId].dislikes - 1)
        state[postId].status = 'neutral'
      } else {

        state[postId].dislikes += 1
        if (state[postId].status === 'liked') {
          state[postId].likes = Math.max(0, state[postId].likes - 1)
        }
        state[postId].status = 'disliked'
      }

      localStorage.setItem('likes', JSON.stringify(state))
    }
  }
})

export const { likePost, dislikePost } = likesSlice.actions
export default likesSlice.reducer