import React from "react";
import withTooltip from "./withTooltip";

const Movie = ({ id, showTooltip }) => {
  return (
    <div>
      <h1>Movie - {id}</h1>
      {showTooltip && <span>Some tooltip</span>}
    </div>
  );
};

export default withTooltip(Movie);
