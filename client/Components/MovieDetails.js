import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = props => {
  return (
    <div className="movie-details-container">
      <div>
        <p className="title">
          {props.details.Title}, {props.details.Year}
        </p>
        <div className="details">
          {props.details.Poster !== "N/A" && <img src={props.details.Poster} />}
          <div className="details-inner">
            <p>Directed by {props.details.Director}</p>
            <p>{props.details.Runtime}</p>
            <p>{props.details.Plot}</p>
            <div className="thumb-buttons">
              <FontAwesomeIcon
                icon="thumbs-down"
                className={props.isDownvoted ? "downvoted thumb-button" : "thumb-button"}
                onClick={props.handleDownClick}
              />
              <span>{props.details.downvotes}</span>
              <FontAwesomeIcon
                icon="thumbs-up"
                className={props.isUpvoted ? "upvoted thumb-button" : "thumb-button"}
                onClick={props.handleUpClick}
              />
              <span>{props.details.upvotes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
