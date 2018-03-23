import React from "react";
import IngredientList from "./IngredientList";

const IngredientContainer = props => {
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
        Ingredients
      </h3>
      <IngredientList ingredients={props.ingredients} />
    </div>
  );
};

export default IngredientContainer;
