import React from "react";
import MealRecipeList from "./MealRecipeList";
import MealModalContainer from "./MealModalContainer";

const MealContainer = props => {
  return (
    <div style={{ backgroundColor: "teal" }}>
      {props.recipes.length > 0 ? (
        <div style={{ backgroundColor: "teal" }}>
          <h1 style={{ color: "white", paddingTop: "20px" }}>Current Meal</h1>
          <MealModalContainer recipes={props.recipes} />
          <MealRecipeList recipes={props.recipes} />
        </div>
      ) : (
        <div style={{ backgroundColor: "teal" }} />
      )}
    </div>
  );
};

export default MealContainer;
