import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    isAdmin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUser, setAdmin } = authenticationSlice.actions;
export default authenticationSlice.reducer;
