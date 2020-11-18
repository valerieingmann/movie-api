import React from "react";
import { Route, Switch } from "react-router-dom";
import { Search, MovieDetailsContainer, Navbar } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/:imdbID" component={MovieDetailsContainer} />
      </Switch>
    </div>
  );
};

export default App;
