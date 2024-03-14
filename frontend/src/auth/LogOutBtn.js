import axios from "axios";
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function LogOutBtn() {
  const { getLoggedIn } = React.useContext(AuthContext);
  const navigate = useNavigate(); // Initialize the navigate function

  async function handleLogout() {
    try {
      await axios.get("http://localhost:5000/auth/logout");
      await getLoggedIn();
      navigate("/lockscreen", { replace: true }); // Navigate to the lockscreen page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <button onClick={handleLogout} className="btn btn-ghost">
      Log Out
    </button>
  );
}

export default LogOutBtn;
