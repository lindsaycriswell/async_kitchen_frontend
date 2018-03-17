import React from "react";
import IngredientContainer from "../Ingredients/IngredientContainer";
import DirectionContainer from "../Directions/DirectionContainer";

const RecipeDetails = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log("add to meal");
  }

  console.log(props.recipe);
  return (
    <div>
      <button onClick={handleClick} style={{ marginBottom: "10px" }}>
        Add to Meal
      </button>
      <p>
        Course: {props.recipe.course} | Serves: {props.recipe.servings}
      </p>
      {props.recipe.prep_time > 0 ? (
        <p>Prep Time: {props.recipe.prep_time} minutes</p>
      ) : null}
      {props.recipe.cook_time > 0 ? (
        <p>Cook Time: {props.recipe.cook_time} minutes</p>
      ) : null}
      <IngredientContainer ingredients={props.recipe.ingredients} />
      <DirectionContainer directions={props.recipe.directions} />
    </div>
  );
};

export default RecipeDetails;
