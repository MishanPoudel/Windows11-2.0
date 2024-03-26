import React, { useState } from "react";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

function Login({ toggleLogin }) {
  const [name] = useState("Mishan Poudel");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { getLoggedIn } = React.useContext(AuthContext);

  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        userName,
        password,
      };

      const response = await axios.post("/auth/login", loginData);
      getLoggedIn();
      if (response.status === 200) {
        window.location.replace("/main", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("Failed to log in. Please check your username and password.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }

  return (
    <>
      {error && (
        <div
          role="alert"
          className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={login}>
        <div className="relative left-0 top-72 h-screen w-full flex flex-col items-center z-10">
          <div className="aspect-square w-32 h-36">
            <UserProfile name={name} />
          </div>
          <div className="my-5 text-3xl text-white">{name}</div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 placeholder-white opacity-100::placeholder"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
            autoComplete="username"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 placeholder-white opacity-100::placeholder"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="hidden btn bg-blue-500 text-white mt-4 px-4 py-2 rounded-md"
          >
            Login
          </button>
          <div
            className="text-white mt-3 text-sm btn btn-ghost hover:text-black"
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
