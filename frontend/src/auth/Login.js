import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import axios from "axios";

function Login({ toggleLogin }) {
  const [name] = useState("Mishan Poudel");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const loginData = {
        userName,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={login}>
        <div className="absolute left-0 top-72 h-screen w-full flex flex-col items-center z-10">
          <div className="aspect-square w-32 h-36">
            <UserProfile name={name} />
          </div>
          <div className="my-5 text-3xl text-white">{name}</div>
          <input
            type="text"
            placeholder="Username"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 placeholder-white opacity-100::placeholder"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 placeholder-white opacity-100::placeholder"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            type="submit"
            className="hidden btn bg-blue-500 text-white mt-4 px-4 py-2 rounded-md"
          ></button>
          <div
            className="text-white mt-3 text-sm btn btn-ghost btn:text-black"
            onClick={toggleLogin}
          >
            Don't have an account? <span className="underline">Register</span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
