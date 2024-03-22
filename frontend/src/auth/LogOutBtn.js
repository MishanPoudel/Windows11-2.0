import axios from "axios";
import React from "react";
import { AuthContext } from "../Context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = React.useContext(AuthContext);

  async function handleLogout() {
    try {
      await axios.get("http://localhost:5000/auth/logout");
      await getLoggedIn();
      window.location.replace("/lockscreen", { replace: true });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return <button onClick={handleLogout}>Log Out</button>;
}

export default LogOutBtn;
