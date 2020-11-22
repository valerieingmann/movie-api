import React from "react";

const PageNav = props => {
  const { currentPage, handlePrevClick, handleNextClick, totalPages } = props;
  return (
    <div>
      {currentPage > 1 && <button onClick={handlePrevClick}>Previous</button>}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && totalPages > 1 && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
};

export default PageNav;
