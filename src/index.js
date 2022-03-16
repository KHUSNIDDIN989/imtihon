import React from "react";
import ReactDOM from "react-dom";
import { UseContext } from "../src/context/useContex";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <UseContext>
        <App />
      </UseContext>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
