import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetails";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faThumbsDown);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/:imdbID" component={MovieDetails} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
