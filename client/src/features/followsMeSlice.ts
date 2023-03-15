import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

export interface FollowsMeState {
    id: string;
  name: string;
  urlImage: string;
  urlLink: string;
}

const initialState: FollowsMeState[] = [
  
]

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      addFollowMe: (state, action) => {
       const newFollowMe = action.payload
       newFollowMe.id = uuid()
        state.push(newFollowMe)
        
      }
  },
})

// Action creators are generated for each case reducer function
export const { addFollowMe } = counterSlice.actions

export default counterSlice.reducer