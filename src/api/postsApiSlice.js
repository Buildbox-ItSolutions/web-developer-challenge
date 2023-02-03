import { apiSlice } from "./apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: `posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePostApi: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useDeletePostApiMutation,
  } = postsApiSlice;