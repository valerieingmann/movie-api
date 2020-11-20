import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = props => {
  console.log(props);
  return (
    <div>
      <p>{props.details.Title}</p>
      <p>{props.details.Year}</p>
      <p>{props.details.Director}</p>
      <p>{props.details.Plot}</p>
      <p>{props.details.Runtime}</p>
      {props.details.Poster !== "N/A" && <img src={props.details.Poster} />}
      <p>{props.details.upvotes}</p>
      <FontAwesomeIcon
        icon="thumbs-up"
        className={props.isUpvoted ? "upvoted" : "thumb-button"}
        onClick={props.handleUpClick}
      />
      <p>{props.details.downvotes}</p>
      <FontAwesomeIcon
        icon="thumbs-down"
        className={props.isDownvoted ? "downvoted" : "thumb-button"}
        onClick={props.handleDownClick}
      />
    </div>
  );
};

export default MovieDetails;
