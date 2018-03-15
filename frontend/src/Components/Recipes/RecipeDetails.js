import React from "react";
import IngredientContainer from "../Ingredients/IngredientContainer";
import DirectionContainer from "../Directions/DirectionContainer";

const RecipeDetails = () => {
  return (
    <div>
      <h4>RecipeDetails</h4>
      <IngredientContainer />
      <DirectionContainer />
    </div>
  );
};

export default RecipeDetails;
