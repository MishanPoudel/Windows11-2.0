import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";

const AppContainer = () => {
  const [isLG, setIsLG] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLG(window.innerWidth >= 1024); // Adjust the width according to the lg breakpoint in Tailwind CSS
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AuthContextProvider>
      <React.StrictMode>
        {isLG ? (
          <App />
        ) : (
          <div className="h-screen w-full flex justify-center items-center bg-black px-12">
            <div className="text-2xl">Not available in smaller screens for now.</div>
          </div>
        )}
      </React.StrictMode>
    </AuthContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
