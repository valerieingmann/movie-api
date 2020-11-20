import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Search, MovieDetailsContainer } from "./Components";

const App = () => {
  return (
    <div>
      <div className="nav-container">
        <Link to="/" className="nav">
          MovieSearch
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/:imdbID" component={MovieDetailsContainer} />
      </Switch>
    </div>
  );
};

export default App;
