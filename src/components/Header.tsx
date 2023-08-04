"use client";

import useAxios from "@/helper/useAxios";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import axios from "axios";

type Props = {};

const Header = (props: Props) => {
  const user = {
    username: "bharat",
    password: "test",
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/auth/refresh", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  // }, []);

  const token = cookieCutter.get("accessToken");

  // const api = useAxios();
  const handleLogout = () => {
    axios.post("http://localhost:8000/auth/logout");
  };

  return (
    <div className="bg-blue-700 py-2">
      <div className="container">
        <div className="flex">
          <Link href="/home">Home</Link>
          {token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
