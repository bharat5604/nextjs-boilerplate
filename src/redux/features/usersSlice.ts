import { createSlice } from "@reduxjs/toolkit";

const isClient = typeof window !== "undefined";

const initialState = {
  users: isClient ? localStorage.get("user") : [],
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.users;
      localStorage.setItem("user", JSON.stringify(action.payload.users));
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
