import React from "react";
import { Link } from "react-router-dom";

const MovieResult = props => {
  const { result } = props;
  return (
    <div>
      <Link className="result-link" target="_blank" to={`/${result.imdbID}`}>
        {result.Poster !== "N/A" ? (
          <img className="poster-result" src={result.Poster} />
        ) : (
          <div className="poster-result">
            <span>No Poster Available</span>
          </div>
        )}
        <p>
          {result.Title}, {result.Year}
        </p>
      </Link>
    </div>
  );
};

export default MovieResult;
