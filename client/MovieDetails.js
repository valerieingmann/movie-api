import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UPVOTES = "upvotes";
const DOWNVOTES = "downvotes";

// TODO: refactor upvote and downvote methods into one?
// TODO: add loading spinner
// TODO: make thumb buttons acutal thumb icons
// TODO: connect upvotes and downvotes to local storage so that users can't just refresh the page and add more

const MovieDetails = props => {
  const { imdbID } = props.match.params;
  const [details, setDetails] = useState({});
  const [upvotes, setUpvotes] = useState(0);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [downvotes, setDownvotes] = useState(0);
  const [isDownvoted, setIsDownvoted] = useState(false);

  useEffect(async () => {
    const { data } = await axios.get(`/api/details/${imdbID}`);
    setDetails(data);
    setUpvotes(data.upvotes);
    setDownvotes(data.downvotes);
  }, []);

  const handleUpClick = async () => {
    let remove = null;
    let add = null;

    if (isUpvoted) {
      remove = UPVOTES;
    } else {
      add = UPVOTES;
    }

    if (isDownvoted) {
      remove = DOWNVOTES;
    }

    const { data } = await axios.put(`/api/vote/${imdbID}`, { add, remove });
    setUpvotes(data.upvotes);
    setDownvotes(data.downvotes);

    setIsUpvoted(!isUpvoted);
    if (isDownvoted) setIsDownvoted(false);
  };

  const handleDownClick = async () => {
    let remove = null;
    let add = null;

    if (isDownvoted) {
      remove = DOWNVOTES;
    } else {
      add = DOWNVOTES;
    }

    if (isUpvoted) {
      remove = UPVOTES;
    }

    const { data } = await axios.put(`/api/vote/${imdbID}`, { add, remove });
    setUpvotes(data.upvotes);
    setDownvotes(data.downvotes);
    if (isUpvoted) setIsUpvoted(false);
    setIsDownvoted(!isDownvoted);
  };

  return (
    <div>
      <p>{details.Title}</p>
      {details.Poster && <img src={details.Poster} />}
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
    </div>
  );
};

export default MovieDetails;
