import React from "react";
import IngredientList from "./IngredientList";

const IngredientContainer = props => {
  return (
    <div className="div-margin">
      <h3 className="modal-header-left">Ingredients</h3>
      <IngredientList ingredients={props.ingredients} />
    </div>
  );
};

export default IngredientContainer;
