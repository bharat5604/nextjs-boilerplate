"use client";

import { getUsers } from "@/redux/features/usersSlice";
import { useAppSelector } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const users = useAppSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://panorbit.in/api/users.json");
      console.log("data", data);
      dispatch(getUsers(data));
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <p>
      {users?.map((user: any) => (
        <Link href={`/${user?.id}`} key={user?.id} className="block">
          {user?.name}
        </Link>
      ))}
      ;
    </p>
  );
}
