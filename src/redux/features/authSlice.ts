import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  userName: string;
  uuid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    userName: "",
    uuid: "",
    isModerator: false,
  } as AuthState,
} as initialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uuid: "1223333",
          isModerator: false,
        },
      };
    },
  },
});

export const { logOut, logIn } = auth.actions;
export default auth.reducer;
