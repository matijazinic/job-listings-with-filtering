import React from "react";

export default function Filters({ filt, handleRemoveFilter }) {
  return (
    <div className="job-active-filter-holder">
      <div className="job-active-filter">{filt} </div>
      <button
        className="filter-remove"
        onClick={() => handleRemoveFilter(filt)}
      ></button>
    </div>
  );
}
