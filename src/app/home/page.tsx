"use client";

import { getUsers } from "@/redux/features/usersSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://panorbit.in/api/users.json");
      console.log("data", data);
      dispatch(getUsers(data));
    };
    fetchUsers();
  }, [dispatch]);
  return <p>Home;</p>;
}
