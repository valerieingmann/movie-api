import React from "react";
import { Link } from "react-router-dom";

const MovieResult = props => {
  const { result } = props;
  return (
    <div className="result-container">
      <Link className="result-link" to={`/${result.imdbID}`}>
        {result.Poster !== "N/A" ? (
          <img className="poster-result" src={result.Poster} />
        ) : (
          <div className="poster-result">
            <span className="no-poster-text">No Poster Available</span>
          </div>
        )}
        <p className="result-text">
          {result.Title}, {result.Year}
        </p>
      </Link>
    </div>
  );
};

export default MovieResult;
