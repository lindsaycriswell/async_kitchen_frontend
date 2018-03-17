import React from "react";
import DirectionList from "./DirectionList";

const DirectionContainer = props => {
  return (
    <div>
      <h3 style={{ margin: "15px" }}>Directions</h3>
      <DirectionList directions={props.directions} />
    </div>
  );
};

export default DirectionContainer;
