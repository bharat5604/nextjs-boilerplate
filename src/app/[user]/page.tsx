"use client";

import { getUser } from "@/redux/features/usersSlice";
import { useAppSelector } from "@/redux/store";
import { log } from "console";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const User = ({ params }: { params: { user: string } }) => {
  const user: any = useAppSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(params.user));
  }, [dispatch, params.user]);

  return <div>{user.name}</div>;
};

export default User;
