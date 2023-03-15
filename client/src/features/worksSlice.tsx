import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

export interface WorksState {
    id: string;
  name: string;
  urlImage: string;
  urlLink: string;
}

const initialState: WorksState[] = [
  
]

export const worksSlice = createSlice({
  name: 'works',
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
export const { addFollowMe } = worksSlice.actions

export default worksSlice.reducer