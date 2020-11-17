import React from "react";
import { Switch, Route } from "react-router-dom";
import { Search, MovieDetails, Navbar } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/:imdbID" component={MovieDetails} />
      </Switch>
    </div>
  );
};

export default App;
