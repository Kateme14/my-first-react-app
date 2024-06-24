import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
  bookmarks: string[]
}

const initialState: BookmarksState = {
  bookmarks: []
}

const bookmarksReducer = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => {
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload)
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter(id => id !== action.payload)
    }
  }
})

export const { addBookmark, removeBookmark } = bookmarksReducer.actions
export default bookmarksReducer.reducer
