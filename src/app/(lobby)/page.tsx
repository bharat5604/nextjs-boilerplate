import { Shell } from "@/components/shells/shell";
import { logIn } from "@/redux/features/authSlice";
import { store } from "@/redux/store";
import React from "react";

const testRedux = async () => {
  try {
    return store.dispatch(logIn("bharat"));
  } catch (error) {
    console.log("error", error);
  }
};

const Lobby = async () => {
  const data = await testRedux();
  console.log("hello", data);
  return <Shell>page</Shell>;
};

export default Lobby;
