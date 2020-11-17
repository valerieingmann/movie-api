import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = props => {
  const {
    details,
    upvotes,
    downvotes,
    isUpvoted,
    isDownvoted,
    handleUpClick,
    handleDownClick
  } = props;
  return (
    <>
      <p>{details.Title}</p>
      {details.Poster !== "N/A" && <img src={details.Poster} />}
      <p>{details.Year}</p>
      <p>{details.Director}</p>
      <p>{details.Plot}</p>
      <p>{details.Runtime}</p>
      <p>{details.Genre}</p>

      <p>Upvotes: {upvotes}</p>
      <FontAwesomeIcon
        icon="thumbs-up"
        className={isUpvoted ? "upvoted" : "thumb-button"}
        onClick={handleUpClick}
      />
      <p>Downvotes: {downvotes}</p>
      <FontAwesomeIcon
        icon="thumbs-down"
        className={isDownvoted ? "downvoted" : "thumb-button"}
        onClick={handleDownClick}
      />
    </>
  );
};

export default MovieDetails;
