import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import MovieDetails from "./MovieDetails";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/:id" component={MovieDetails} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
