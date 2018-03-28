import React from "react";
import Ingredient from "./Ingredient";

const IngredientList = props => {
  return (
    <ul className="ul-div">
      {props.ingredients.map(ingredient => (
        <Ingredient ingredient={ingredient} key={ingredient.id} />
      ))}
    </ul>
  );
};

export default IngredientList;
