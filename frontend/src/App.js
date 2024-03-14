import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./Context/AuthContext";
import Lockscreen from "./Pages/lockscreen";
import Main from "./Pages/main";
import axios from "axios";

axios.defaults.withCredentials = true;
function App() {
  const { loggedIn } = React.useContext(AuthContext);

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {loggedIn === false && <Route path="*" element={<Lockscreen />} />}
          {loggedIn === true && <Route path="/main" element={<Main />} />}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
