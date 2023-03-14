import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FollowsMeState {
    id: string;
  name: string;
  urlImage: string;
}

const initialState: FollowsMeState[] = [
    {id: "1", name: "@elonMusk", urlImage: "/redes/twitter.png"},
    {id: "2", name: "@elonMusk", urlImage: "/redes/ens.png"},
    {id: "3", name: "@elonMusk", urlImage: "/redes/notion.png"},
    {id: "4", name: "@elonMusk", urlImage: "/redes/telegram.png"},
    {id: "5", name: "@elonMusk", urlImage: "/redes/twich.png"},
    {id: "6", name: "@elonMusk", urlImage: "/redes/lens.png"},
]

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer