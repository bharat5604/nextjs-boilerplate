"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import useAxios from "@/helper/useAxios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUsers } from "@/redux/features/usersSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });
  //   const router = useRouter();
  let api = useAxios();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/auth`, cred, {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      cookieCutter.set("accessToken", response.data.accessToken);
      console.log("response", response);
      if (response.data?.accessToken) {
        // router.push("/");
      }
    } catch (error) {
      console.log("eror", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20">
      <form action="" className="bg-slate-200 rounded-lg  p-2 shadow-md">
        <div className=" flex flex-col gap-2">
          <label htmlFor="">User Name</label>
          <input
            type="text"
            placeholder="Username..."
            className="p-2 rounded-lg"
            onChange={(e) => setCred({ ...cred, username: e.target.value })}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="">password</label>
          <input
            type="text"
            placeholder="password..."
            className="p-2 rounded-lg"
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
        </div>
        <button onClick={handleLogin} type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
