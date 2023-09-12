import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '@/model/user'
import {apiConfig} from '@/api/config'

export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: apiConfig.baseUrl,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], null>({
            query: () => 'users',
        }),
        getUserById: builder.query<User, { id: number }>({
            query: ({ id }) => `users/${id}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
