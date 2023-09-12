import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import viewSlice from '@/store/slices/viewSlice'
import {userApi} from '@/api/user'
import {postApi} from '@/api/post'
import {commentApi} from '@/api/comment'

export const store = configureStore({
    reducer: {
        view: viewSlice,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            userApi.middleware,
            postApi.middleware,
            commentApi.middleware,
        ]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;