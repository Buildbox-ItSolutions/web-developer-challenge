import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Posts {
  name: string;
  message: string;
  image: string;
  id: string;
}

const INITIAL_STATE: Posts[] = [
  {
    name: "Manuela Oliveira",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus",
    image:
      "https://cdn.zeplin.io/5c784f73981c3b6256bb7256/assets/0e371026-05c3-4276-8a38-1d5dfedbb1c5.png",
    id: "asidjusahduas",
  },
  {
    name: "Manuela Oliveira",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
    image:
      "https://cdn.zeplin.io/5c784f73981c3b6256bb7256/assets/f3074621-717c-4f39-9f8e-4b94d734eb9d.png",
    id: "uashdysagdhuasd",
  },
];

const slicePosts = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    addPosts(state, { payload }: PayloadAction<Posts>) {
      return [
        {
          name: payload.name,
          message: payload.message,
          image: payload.image,
          id: payload.id,
        },
        ...state,
      ];
    },
    removePost(state, { payload }: PayloadAction<Posts>) {
      return state.filter((eachItem) => eachItem.id !== payload.id);
    },
  },
});

export default slicePosts.reducer;
export const { addPosts, removePost } = slicePosts.actions;

export const usePosts = (state: any) => {
  return state.posts as Posts[];
};
