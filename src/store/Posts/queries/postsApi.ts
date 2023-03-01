import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  userId: number;
  title: string;
  body: string;
}
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
