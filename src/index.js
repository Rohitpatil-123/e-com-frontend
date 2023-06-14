import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createContext } from "react";
import axios from "axios";

export const Context = createContext();

const Appwrapper = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const isauth = async () => {
    const data = axios.get("https://e-com-rksk.onrender.com/getuser", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (data) {
      setisAuthenticated(true);
    } else {
      setisAuthenticated(false);
    }
  };
  useEffect(() => {
    // isauth();
  }, []);
  return (
    <Context.Provider
      value={{ isAuthenticated, setisAuthenticated, loading, setLoading }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>
);
