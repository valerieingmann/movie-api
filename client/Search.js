import React, { useState } from "react";
import axios from "axios";
import MovieResult from "./MovieResult";

// TODO: handle extra dashes on end of year

const Search = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    // api currently only sends back 10 results. could implement pagination as a future feature
    let response = await axios.get(`/api/search/${title}`);
    setResults(response.data.Search);

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search by Title</label>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)}></input>
        <button type="submit" disabled={!title.length}>
          Submit
        </button>
      </form>
      <div className="container">
        {results.map(result => {
          return <MovieResult key={result.imdbID} result={result} />;
        })}
      </div>
    </div>
  );
};

export default Search;
