import coolLinksSlice from '@/src/features/coolLinksSlice'
import followsMeReducer from '@/src/features/followsMeSlice'
import worksSlice from '@/src/features/worksSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    followMe: followsMeReducer,
    works: worksSlice,
    coolLinks: coolLinksSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch