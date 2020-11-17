import React, { useEffect, useState } from "react";
import axios from "axios";
import { NotFound } from "../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: refactor upvote and downvote methods into one?
// TODO: add loading spinner
// TODO: connect upvotes and downvotes to local storage so that users can't just refresh the page and add more

const MovieDetailsContainer = props => {
  const { imdbID } = props.match.params;
  const [details, setDetails] = useState({});
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const { data } = await axios.get(`/api/details/${imdbID}`);
    if (data.Response === "False") setError("Sorry, that movie does not exist in our database.");
    setDetails(data);
    setLoading(false);
  }, []);

  const handleUpClick = async () => {
    let remove = null;
    let add = null;

    if (isUpvoted) remove = "upvotes";
    else {
      add = "upvotes";
      if (isDownvoted) {
        remove = "downvotes";
        setIsDownvoted(false);
      }
    }

    setIsUpvoted(!isUpvoted);

    const { data } = await axios.put(`/api/vote/${imdbID}`, { add, remove });
    setDetails({ ...details, upvotes: data.upvotes, downvotes: data.downvotes });
  };

  const handleDownClick = async () => {
    let remove = null;
    let add = null;

    if (isDownvoted) remove = "downvotes";
    else {
      add = "downvotes";
      if (isUpvoted) {
        remove = "upvotes";
        setIsUpvoted(false);
      }
    }

    setIsDownvoted(!isDownvoted);

    const { data } = await axios.put(`/api/vote/${imdbID}`, { add, remove });
    setDetails({ ...details, upvotes: data.upvotes, downvotes: data.downvotes });
  };

  if (loading) return <p>Loading...</p>;
  else if (error) return <NotFound error={error} />;
  else {
    return (
      <>
        <p>{details.Title}</p>
        {details.Poster !== "N/A" && <img src={details.Poster} />}
        <p>{details.Year}</p>
        <p>{details.Director}</p>
        <p>{details.Plot}</p>
        <p>{details.Runtime}</p>
        <p>{details.Genre}</p>

        <p>Upvotes: {details.upvotes}</p>
        <FontAwesomeIcon
          icon="thumbs-up"
          className={isUpvoted ? "upvoted" : "thumb-button"}
          onClick={handleUpClick}
        />
        <p>Downvotes: {details.downvotes}</p>
        <FontAwesomeIcon
          icon="thumbs-down"
          className={isDownvoted ? "downvoted" : "thumb-button"}
          onClick={handleDownClick}
        />
      </>
    );
  }
};

export default MovieDetailsContainer;
