import React, { useState } from "react";
import axios from "axios";

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
  console.log(results);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search by Title</label>
        <input type="text" value={title} onChange={event => setTitle(event.target.value)}></input>
        <button type="submit" disabled={!title.length}>
          Submit
        </button>
      </form>

      {results.map(result => {
        let posterElem = result.Poster && result.Poster !== "N/A" && <img src={result.Poster} />;
        return (
          <div key={result.imdbID}>
            <p>
              {result.Title}, {result.Year}
            </p>
            {posterElem}
          </div>
        );
      })}
    </>
  );
};

export default Search;
