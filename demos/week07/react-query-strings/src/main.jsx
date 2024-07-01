import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//I need to make my App be available for routing (you can also wrap your App contents in App.jsx)
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
