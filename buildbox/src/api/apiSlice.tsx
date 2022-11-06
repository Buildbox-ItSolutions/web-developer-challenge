import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (post: any) => ({
        url: `posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } =
  apiSlice;
