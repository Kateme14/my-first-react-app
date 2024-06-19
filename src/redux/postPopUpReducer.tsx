import { createSlice } from "@reduxjs/toolkit"
import { PostType } from "../components/types/Types"

type InitialStateType = {
    selectedPost: PostType | null,
} 
const initialState: InitialStateType = {
    selectedPost: null,
}

const postPopUpReducer = createSlice (
    {
        name: 'postPopUp',
        initialState,
        reducers: {
            setSelectedPost: (state, action) => {
                state.selectedPost = action.payload
            }
        }
    }
)

export const { setSelectedPost } = postPopUpReducer.actions
export default postPopUpReducer.reducer
export {}