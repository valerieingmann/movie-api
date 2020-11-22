import React from "react";

const PageNav = props => {
  const { currentPage, handlePrevClick, handleNextClick, totalPages } = props;
  return (
    <div className="pagination">
      {currentPage > 1 && <button onClick={handlePrevClick}>{"<<"}</button>}
      <span>
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && totalPages > 1 && (
        <button onClick={handleNextClick}>{">>"}</button>
      )}
    </div>
  );
};

export default PageNav;
