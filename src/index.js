//setup for React 18
import ReactDOM from "react-dom/client";
import React from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context"; // use {} to import the function!!; not the default objext.

//create rootElement and get root
const rootElement = document.getElementById("root");

// create a root
const root = ReactDOM.createRoot(rootElement);

//render app to root
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
