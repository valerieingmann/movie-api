import React from "react";
import { Link } from "react-router-dom";

const MovieResult = props => {
  const { result } = props;
  return (
    <div>
      <Link to={`/${result.imdbID}`}>
        <p>
          {result.Title}, {result.Year}
        </p>
        {result.Poster !== "N/A" && <img src={result.Poster} />}
      </Link>
    </div>
  );
};

export default MovieResult;
