import React from "react";
import DirectionList from "./DirectionList";

const DirectionContainer = props => {
  return (
    <div>
      <h3
        style={{
          marginLeft: "10px",
          marginTop: "20px",
          color: "blue",
          textDecoration: "underline"
        }}
      >
        Directions
      </h3>
      <DirectionList directions={props.directions} />
    </div>
  );
};

export default DirectionContainer;
