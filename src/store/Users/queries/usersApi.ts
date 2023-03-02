import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@configs/store';

export interface User {
  id: number;
  name: string;
  age: number;
}

/* const usersAdapter = createEntityAdapter<User>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
}) */

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => '/users',
      transformResponse: (response: User[]) => response,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Users', id } as const)), { type: 'Users', id: 'LIST' }]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    addUser: build.mutation<User, Partial<User>>({
      query(body) {
        return {
          url: `/users`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    deleteUser: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    updateUser: build.mutation<User, Partial<User>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `users/${id}`,
          method: 'PUT',
          body,
        };
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const position = draft.findIndex((user) => user.id === id);
            const currentUser = draft.at(position);
            if (currentUser) {
              currentUser.name = patch.name || 'eb';
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = usersApi;
