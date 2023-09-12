import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Comment} from '@/model/comment'
import {apiConfig} from '@/api/config'

export const commentApi = createApi({
    reducerPath: 'commentApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: apiConfig.baseUrl,
    }),
    endpoints: (builder) => ({
        getCommentsByPostId: builder.query<Comment, { postId: number }>({
            query: ({ postId }) => `posts/${postId}/comments`,
        }),
    }),
});

export const { useGetCommentsByPostIdQuery } = commentApi;
