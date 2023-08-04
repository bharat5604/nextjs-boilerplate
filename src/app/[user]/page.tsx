"use client";

import { getUser } from "@/redux/features/usersSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  // const router = useRouter();
  // const { user } = router.query;
  // console.log("user", user);

  useEffect(() => {
    // dispatch(getUser(user));
  }, [dispatch]);

  return <div>UserPAge</div>;
};

export default User;
