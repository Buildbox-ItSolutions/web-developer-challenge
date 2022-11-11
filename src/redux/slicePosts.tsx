import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Posts {
  id: number,
  name: string;
  message: string,
  favorite: boolean;
}

const INITIAL_STATE: Posts[] = [
  { id: 1, name: "João", message: 'Lorem-ipsum-', favorite: false },
  { id: 2, name: "José", message: 'Lorem-ipsum-', favorite: false },
  { id: 3, name: "Geraldo", message: 'Lorem-ipsum-', favorite: false },
];

const slicePosts = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    addPosts(state, { payload }: PayloadAction<Posts>) {
      return [...state, { id: payload.id, name: payload.name, message: payload.message, favorite: false }];
    },
    toFavorite(state, { payload }: PayloadAction<Posts>) {
      return state.map((st) =>
        st.id === payload.id ? { ...st, favorite: !st.favorite } : st
      );
    },
    toDelete(state, { payload }: PayloadAction<Posts>) {
      return state.filter(element => element.id !== payload.id)
    },

  },
});

export default slicePosts.reducer;
export const { addPosts, toFavorite, toDelete } = slicePosts.actions;

export const usePosts = (state: any) => {
  return state.posts as Posts[];
};
