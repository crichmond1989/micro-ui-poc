import React from "react";

import ReactDOM from "react-dom/client";

import App from "./shell/App.tsx";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.poc_store = store;
