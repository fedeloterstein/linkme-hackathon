import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface CoolLinksState {
  id: string;
  title: string;
  urlLink: string;
  color: string;
}

const initialState: CoolLinksState[] = [
  {
    id: uuid(),
    title: "Check out my CV",
    urlLink: "https://ethglobal.com/",
    color: '#FFD83D'
  },
];

export const CoolLinksSlice = createSlice({
  name: "coolLinks",
  initialState,
  reducers: {
    addLink: (state, action) => {
      const newLink = action.payload;
      newLink.id = uuid();
      state.push(newLink);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLink } = CoolLinksSlice.actions;

export default CoolLinksSlice.reducer;
