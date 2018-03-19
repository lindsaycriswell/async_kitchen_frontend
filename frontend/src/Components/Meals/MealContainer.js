import React from "react";
import RecipeList from "../Recipes/RecipeList";

const MealContainer = props => {
  return (
    <div>
      {props.recipes.length > 0 ? (
        <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
      ) : null}
      <RecipeList recipes={props.recipes} />
    </div>
  );
};

export default MealContainer;
