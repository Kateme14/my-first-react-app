import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
  bookmarks: string[]
}


const loadBookmarksFromLocalStorage = (): string[] => {
  const storedBookmarks = localStorage.getItem('bookmarks')
  return storedBookmarks ? JSON.parse(storedBookmarks) : []
}

const initialState: BookmarksState = {
  bookmarks: loadBookmarksFromLocalStorage()
}

const bookmarksReducer = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => {
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload)
        localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter(id => id !== action.payload)
      localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
    }
  }
})

export const { addBookmark, removeBookmark } = bookmarksReducer.actions
export default bookmarksReducer.reducer
