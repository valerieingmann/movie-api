import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
library.add(faThumbsUp, faThumbsDown);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
