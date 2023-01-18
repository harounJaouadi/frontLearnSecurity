import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import SignupModal from "./components/signupModal/SignupModal";
import LoginModal from "./components/loginModal/LoginModal";
import "./index.css";
import MyContext, { ContextProvider } from "./store/context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
