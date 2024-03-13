import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lockscreen from "./Pages/lockscreen";
import Main from "./Pages/main";

axios.defaults.withCredentials = true;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lockscreen" element={<Lockscreen />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
