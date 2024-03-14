import axios from "axios";
import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register({ toggleLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const navigate = useNavigate();

  const { getLoggedIn } = React.useContext(AuthContext);

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        userName,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      await getLoggedIn();
      navigate("/main", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={register}>
        <div className="absolute left-0 top-72 h-screen w-full flex flex-col items-center z-10">
          <input
            type="text"
            placeholder="Enter Your Username"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 text-white placeholder-white opacity-100::placeholder"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 text-white placeholder-white opacity-100::placeholder"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input bg-opacity-30 w-full max-w-xs focus:outline-none border-[0.5px] border-b-white mt-4 text-white placeholder-white opacity-100::placeholder"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
          <button type="submit" className="btn btn-success text-white mt-4">
            Register
          </button>
          <div
            className="text-white mt-3 text-sm btn btn-ghost hover:text-black"
            onClick={toggleLogin}
          >
            Already have an account? <div className="underline">Login</div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
