import { createSlice } from "@reduxjs/toolkit";
import reviews from '../db.json'

const initialState = reviews;

const userSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers:{
        addReview : (state,action)=>{
            state.push(action.payload)
        },
        editReview : (state,action)=>{
            const { _id, title, description } = action.payload;
            const existingReview = state.find(review => review._id === _id);
            if(existingReview) {
                existingReview.title = title;
                existingReview.description = description;
            }
        },
        deleteReview: (state, action) => {
            const { _id } = action.payload;
            const existingReview = state.find(user => user._id === _id);
            if(existingReview) {
              return state.filter(user => user._id !== _id);
            }
        }
    }
});

export const {addReview,editReview,deleteReview} = userSlice.actions
export default userSlice.reducer;