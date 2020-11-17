import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="nav">
        MovieSearch
      </Link>
    </div>
  );
};

export default Navbar;
