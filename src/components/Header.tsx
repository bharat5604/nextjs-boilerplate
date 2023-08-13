"use client";

import Link from "next/link";

import axios from "axios";

type Props = {};

const Header = (props: Props) => {
  const user = {
    username: "bharat",
    password: "test",
  };

  // const api = useAxios();
  const handleLogout = () => {
    axios.post("http://localhost:8000/auth/logout");
  };

  return (
    <div className="bg-blue-700 py-2">
      <div className="container">
        <div className="flex gap-4">
          <Link href="/home">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
