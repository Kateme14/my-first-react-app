import { combineReducers, configureStore } from "@reduxjs/toolkit"
import postPopUpReducer from "./postPopUpReducer"
import likesReducer from './likesReducer'
import bookmarksReducer from './bookmarksReducer'
import postsReducer from './postsReducer'

const combineReducer = combineReducers ({
    postPopUpReducer,
    likes: likesReducer,
    bookmarks: bookmarksReducer,
    posts: postsReducer
})


const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (err) {
      return undefined
    }
  }
  
  const saveState = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch (err) {
    }
  }
  
  const persistedState = loadState()

// export const store = configureStore (
//     {
//         reducer: combineReducer,
//     }

// )

export const store = configureStore({
    reducer: combineReducer,
    preloadedState: persistedState
  })

store.subscribe(() => {
saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch