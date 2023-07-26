"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const user = {
    username: "bharat",
    password: "test",
  };

  useEffect(() => {
    fetch("http://localhost:8000/auth/refresh")
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  const handleLogin = async () => {
    try {
      await fetch(`http://localhost:8000/auth`, {
        method: "POST",
        credentials: "include",
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json());
    } catch (error) {
      console.log("eror", error);
    }
  };
  return (
    <div className="bg-blue-700 py-2">
      <div className="container">
        <div className="flex">
          <Link href="/">Home</Link>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
