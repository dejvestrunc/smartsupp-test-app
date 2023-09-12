import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from '@/model/post'
import {apiConfig} from '@/api/config'

export const postApi = createApi({
    reducerPath: 'postApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: apiConfig.baseUrl,
    }),
    endpoints: (builder) => ({
        getPostsByUserId: builder.query<Post, { userId: number }>({
            query: ({ userId }) => `users/${userId}/posts`,
        }),
    }),
});

export const { useGetPostsByUserIdQuery } = postApi;
