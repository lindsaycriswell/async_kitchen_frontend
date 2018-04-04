import React from "react";
import DirectionList from "./DirectionList";

const DirectionContainer = props => {
  return (
    <div className="div-margin">
      <h3 className="modal-header-left">Directions</h3>
      <DirectionList directions={props.directions} />
    </div>
  );
};

export default DirectionContainer;
