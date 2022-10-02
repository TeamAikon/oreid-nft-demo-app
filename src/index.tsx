import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import RedirectHttps from "./RedirectHttps/RedirectHttps";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RedirectHttps>
      <App />
    </RedirectHttps>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
