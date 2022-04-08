import React, { useContext } from "react";
import ThingsContext from "./thingsContext";

const ListContainer = () => {
  const things = useContext(ThingsContext);

  return (
    <ul>
      {things.map((thing) => (
        <ul key={thing.id}>{thing.name}</ul>
      ))}
    </ul>
  );
};

export default ListContainer;
