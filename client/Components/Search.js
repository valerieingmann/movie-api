import React, { useState } from "react";
import axios from "axios";
import { MovieResult, Form } from "../Components";

const Search = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!title) alert("Please type in a movie title!");
      const { data } = await axios.get(`/api/search/${title}`);
      if (data.Response !== "False") {
        setError("");
        setResults(data.Search);
      } else {
        setError("Sorry, no results found!");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="landing-container">
      <Form handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <div className="results-container">
        {error && <p className="black">{error}</p>}
        {results.map(result => {
          return <MovieResult key={result.imdbID} result={result} />;
        })}
      </div>
    </div>
  );
};

export default Search;
