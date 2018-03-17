import React from "react";
import Direction from "./Direction";

const DirectionList = props => {
  return (
    <ul style={{ textAlign: "left" }}>
      {props.directions.map(direction => (
        <Direction direction={direction} key={direction.id} />
      ))}
    </ul>
  );
};

export default DirectionList;
