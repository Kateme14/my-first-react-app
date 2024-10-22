import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import postsReducer from '../redux/postsReducer'
import postPopUpReducer from './postPopUpReducer'
import likesReducer from './likesReducer'
import bookmarksReducer from './bookmarksReducer'
import authReducer from './authReducer'



const combineReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  postPopUp: postPopUpReducer,
  likes: likesReducer,
  bookmarks: bookmarksReducer,
})

export const store = configureStore({
  reducer: combineReducer,
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(thunkMiddleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof combineReducer>
export type AppDispatch = typeof store.dispatch