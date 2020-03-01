import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Loader;
