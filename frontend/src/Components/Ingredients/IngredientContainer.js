import React from "react";
import IngredientList from "./IngredientList";

const IngredientContainer = props => {
  return (
    <div>
      <h3 style={{ margin: "15px" }}>Ingredients</h3>
      <IngredientList ingredients={props.ingredients} />
    </div>
  );
};

export default IngredientContainer;
