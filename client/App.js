import React from "react";
import { Route } from "react-router-dom";
import { Search, MovieDetailsContainer, Navbar, NotFound } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Search} />
      <Route exact path="/:imdbID" component={MovieDetailsContainer} />
      <Route path="*" component={NotFound} />
    </div>
  );
};

export default App;
