import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = props => {
  const { id } = props.match.params;
  const [details, setDetails] = useState({});
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  useEffect(async () => {
    // get movie details data
    const { data } = await axios.get(`/api/details/${id}`);
    console.log(data);
    // setDetails(data);
  }, []);

  console.log(details);

  return (
    <div>
      {/* <p>{details.Title}</p>
      <p>{details.Year}</p>
      <p>{details.Director}</p>
      <p>{details.Plot}</p>
      <p>{details.Runtime}</p>
      <p>{details.Genre}</p> */}
    </div>
  );
};

export default MovieDetails;
