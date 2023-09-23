import { Shell } from "@/components/shells/shell";
import ApiService from "@/helper/httpFetcher";
import { logIn } from "@/redux/features/authSlice";
import { getUsers } from "@/redux/features/usersSlice";
import { store } from "@/redux/store";
import React from "react";

const testRedux = async () => {
  try {
    const { data } = await ApiService.fetchData({
      method: "get",
      url: "users",
    });
    console.log("data", data);
    store.dispatch(getUsers(data));
  } catch (error) {
    console.log("error", error);
  }
};

const Lobby = async () => {
  const data = await testRedux();

  return <Shell>page</Shell>;
};

export default Lobby;
