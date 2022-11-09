import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      return state;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      return state;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { setCredentials, logOut } = authSlice.actions;

export const userSelector = (state) => state.auth.user;
export const tokenSelector = (state) => state.auth.token;
