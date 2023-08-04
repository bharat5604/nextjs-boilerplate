import { createSlice } from "@reduxjs/toolkit";
const isClient = typeof window !== "undefined" || window !== undefined;
let usersData;
if (isClient) {
  usersData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : "";
}
const initialState = {
  users: isClient ? usersData : [],
  user: [],
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
      const user = state.users.filter(
        (item: any) => item.id === Number(action.payload)
      );
      console.log("user", user);

      state.user = { ...user[0] };
    },
  },
});

export const { getUsers, getUser } = userSlice.actions;
export default userSlice.reducer;
