import React from "react";

export default function JobItem({ item, handleFilter }) {
  const reqs = [item.role, item.level, ...item.languages, ...item.tools];
  const buttons = reqs.map((req) => {
    return (
      <button
        key={req}
        value={req}
        className="job-filter"
        onClick={(e) => handleFilter(e)}
      >
        {req}
      </button>
    );
  });

  const styleFeatured = {
    borderLeft: item.featured ? ".25rem solid var(--color-primary)" : "",
  };

  return (
    <>
      <div
        className={`job-container ${item.featured ? "featured" : ""}`}
        style={styleFeatured}
      >
        <img className="job-logo" src={`${item.logo}`} alt={item.company} />
        <div className="job-info">
          <div className="job-info-company">
            <p className="job-info-company-title">{item.company}</p>
            {item.new && <p className="bubble">NEW!</p>}
            {item.featured && <p className="bubble-alt">FEATURED</p>}
          </div>
          <p className="job-info-position">{item.position}</p>
          <div className="job-info-misc">
            <span>{item.postedAt}</span>
            <span className="span-sep">&#8226;</span>
            <span>{item.contract}</span>
            <span className="span-sep">&#8226;</span>
            <span>{item.location}</span>
          </div>
        </div>
        <hr />
        <div className="job-requirements">{buttons}</div>
      </div>
    </>
  );
}
