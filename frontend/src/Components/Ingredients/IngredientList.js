import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = props => {
  return (
    <ul style={{ textAlign: "left", marginBottom: "10px" }}>
      {props.ingredients.map(ingredient => (
        <Ingredient ingredient={ingredient} key={ingredient.id} />
      ))}
    </ul>
  );
};

export default IngredientList;
