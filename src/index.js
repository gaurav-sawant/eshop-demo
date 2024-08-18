import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopContextProvider } from "./context/StateProvider";
import { initialValue, reducer } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider initialValue={initialValue} reducer={reducer}>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
