import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

export interface WorksState {
    id: string;
  title: string;
  description: string;
  urlLink: string;
  urlImage: string;
}

const initialState: WorksState[] = [
  {
    id: uuid(),
    urlImage: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "My portfolio",
    description: "Check the latest",
    urlLink: "https://ethglobal.com/",
  }
]

export const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
      addWork: (state, action) => {
       const newWork = action.payload
       newWork.id = uuid()
        state.push(newWork)
        
      }
  },
})

// Action creators are generated for each case reducer function
export const { addWork } = worksSlice.actions

export default worksSlice.reducer