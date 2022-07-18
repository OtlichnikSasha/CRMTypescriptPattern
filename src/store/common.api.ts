import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const TOKEN = 'token'
export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_API,
        prepareHeaders: headers => {
            headers.set('Authorization', `Bearer ${localStorage.getItem(TOKEN)}`);
            return headers;
        },
    }),
    endpoints: _ => ({}),
});