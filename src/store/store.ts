import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

import {categoryApi} from './api/category.api'
import {productApi} from './api/product.api'
import {userReducer} from './slices/userSlice'
import {commonApi} from "./common.api";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(commonApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>