import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.users;
    },
    getUser: (state, action) => {
      state.user = state.users.filter(
        (item: any) => item.id === action.payload
      );
    },
  },
});

export const { getUsers, getUser } = userSlice.actions;
export default userSlice.reducer;
