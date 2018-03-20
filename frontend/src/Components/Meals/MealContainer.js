import React from "react";
import RecipeList from "../Recipes/RecipeList";
import MealModalContainer from "./MealModalContainer";

const MealContainer = props => {
  return (
    <div>
      {props.recipes.length > 0 ? (
        <div>
          <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
          <RecipeList recipes={props.recipes} />
          <MealModalContainer recipes={props.recipes} />
        </div>
      ) : null}
    </div>
  );
};

export default MealContainer;
