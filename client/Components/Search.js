import React, { useState } from "react";
import axios from "axios";
import { MovieResult, Form, PageNav } from "../Components";

const Search = () => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    await fetchMovies(currentPage);
  };

  const fetchMovies = async page => {
    try {
      if (!title) alert("Please type in a movie title!");
      const { data } = await axios.get(`/api/search/${title}/${page}`);
      if (data.Response !== "False") {
        setError("");
        setResults(data.Search);
        setTotalPages(Math.floor(data.totalResults / 10));
      } else {
        setError("Sorry, no results found!");
        setResults([]);
        setTotalPages(0);
      }
    } catch (error) {
      setError(error);
    }
  };

  const handlePrevClick = () => {
    fetchMovies(currentPage - 1);
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextClick = () => {
    fetchMovies(currentPage + 1);
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="landing-container">
      <Form handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <div>
        {totalPages > 0 && (
          <PageNav
            currentPage={currentPage}
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
            totalPages={totalPages}
          />
        )}
      </div>
      <div className="results-container">
        {error && <p>{error}</p>}
        {results.map(result => {
          return <MovieResult key={result.imdbID} result={result} />;
        })}
      </div>
    </div>
  );
};

export default Search;
