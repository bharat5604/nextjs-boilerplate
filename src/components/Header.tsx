"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const user = {
    username: "bharat",
    password: "test",
  };

  useEffect(() => {
    fetch("http://localhost:8000/auth/refresh", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);

  return (
    <div className="bg-blue-700 py-2">
      <div className="container">
        <div className="flex">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
