import React from "react";

const NotFound = props => {
  return <p>{props.error || "Sorry, that page does not exist!"}</p>;
};

export default NotFound;
