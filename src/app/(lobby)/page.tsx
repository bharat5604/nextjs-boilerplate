import { Shell } from "@/components/shells/shell";
import ApiService from "@/helper/httpFetcher";
import { logIn } from "@/redux/features/authSlice";
import { getUsers } from "@/redux/features/usersSlice";
import { store } from "@/redux/store";
import { redirect } from "next/navigation";
import React from "react";

const testRedux = async () => {
  try {
    const { data }: { data: { message: string } } = await ApiService.fetchData({
      method: "get",
      url: "users",
    });
    console.log("data111", data);

    store.dispatch(getUsers(data));
  } catch (error) {
    console.log("error", error.response.status);
    if (error.response.status == 403 || error.response.status == 401) {
      redirect("/signin");
    }
  }
};

const Lobby = async () => {
  const data = await testRedux();

  // console.log("datadata", data);
  // redirect("/signin");

  return <Shell>page</Shell>;
};

export default Lobby;
