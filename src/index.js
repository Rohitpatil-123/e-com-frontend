import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createContext } from "react";

export const Context = createContext();

const Appwrapper = () => {
  const [Authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{ Authenticated, setAuthenticated, loading, setLoading }}
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
