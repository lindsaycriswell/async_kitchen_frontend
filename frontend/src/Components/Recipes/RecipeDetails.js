import React from "react";
import IngredientContainer from "../Ingredients/IngredientContainer";
import DirectionContainer from "../Directions/DirectionContainer";

const RecipeDetails = props => {
  return (
    <div>
      <h4>RecipeDetails - {props.recipe.name}</h4>
      <IngredientContainer />
      <DirectionContainer />
    </div>
  );
};

export default RecipeDetails;
